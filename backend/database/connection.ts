import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;
let database: Db | null = null;

const get_environment = (): string => {
  const raw_env = process.env.NODE_ENV?.toLowerCase()?.trim();
  
  if (raw_env === 'production' || raw_env === 'prod') {
    return 'production';
  }
  
  if (raw_env === 'development' || raw_env === 'dev' || raw_env === 'local') {
    return 'development';
  }
  
  // Default to development but warn about unknown environment
  if (raw_env && raw_env !== 'development') {
    console.warn(`Unknown NODE_ENV: "${process.env.NODE_ENV}". Defaulting to development mode.`);
  }
  
  return 'development';
};

const validate_mongodb_uri = (uri: string, environment: string): void => {
  let parsed_url: URL;
  
  try {
    parsed_url = new URL(uri);
  } catch (error) {
    throw new Error(`Invalid MongoDB URI format: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  
  // Ensure it's a MongoDB protocol
  if (!['mongodb:', 'mongodb+srv:'].includes(parsed_url.protocol)) {
    throw new Error(`Invalid protocol: ${parsed_url.protocol}. Must be mongodb: or mongodb+srv:`);
  }
  
  if (environment === 'production') {
    // Require username and password
    if (!parsed_url.username) {
      throw new Error('Production MongoDB URI must include a username');
    }
    
    if (!parsed_url.password) {
      throw new Error('Production MongoDB URI must include a password');
    }
    
    // Block localhost and common local addresses
    const hostname = parsed_url.hostname.toLowerCase();
    const localhost_patterns = ['localhost', '127.0.0.1', '::1', '0.0.0.0'];
    if (localhost_patterns.includes(hostname)) {
      throw new Error(`Production MongoDB cannot use localhost address: ${hostname}`);
    }
    
    // Require TLS for standard mongodb:// connections
    if (parsed_url.protocol === 'mongodb:') {
      const params = parsed_url.searchParams;
      if (params.get('tls') !== 'true' && params.get('ssl') !== 'true') {
        throw new Error('Production MongoDB connections must use TLS. Add ?tls=true to the URI');
      }
    }
  }
};

const validate_production_config = (): void => {
  const environment = get_environment();
  
  if (environment === 'production') {
    const required_vars = ['MONGODB_URI', 'DATABASE_NAME'];
    const missing_vars = required_vars.filter(varName => !process.env[varName]);
    
    if (missing_vars.length > 0) {
      throw new Error(
        `Production environment requires the following environment variables: ${missing_vars.join(', ')}`
      );
    }
    
    // Validate MongoDB URI format and security requirements
    validate_mongodb_uri(process.env.MONGODB_URI!, environment);
    
    // Validate database name doesn't contain development indicators
    const database_name = process.env.DATABASE_NAME!;
    const dev_indicators = ['dev', 'test', 'local'];
    const has_dev_indicator = dev_indicators.some(indicator => 
      database_name.toLowerCase().includes(indicator)
    );
    
    if (has_dev_indicator) {
      throw new Error(
        `Production DATABASE_NAME should not contain development indicators (${dev_indicators.join(', ')}): ${database_name}`
      );
    }
  }
};

const redact_uri = (uri: string): string => {
  try {
    const parsed_url = new URL(uri);
    if (parsed_url.password) {
      parsed_url.password = '****';
    }
    if (parsed_url.username) {
      parsed_url.username = parsed_url.username.substring(0, 2) + '****';
    }
    return parsed_url.toString();
  } catch {
    return '[invalid-uri]';
  }
};

const get_database_config = (): { uri: string; name: string } => {
  const environment = get_environment();
  
  if (environment === 'production') {
    // Production: require environment variables (validation ensures they exist)
    return {
      uri: process.env.MONGODB_URI!,
      name: process.env.DATABASE_NAME!
    };
  } else {
    // Development: use secure defaults if environment variables not provided
    return {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
      name: process.env.DATABASE_NAME || 'app_database_dev'
    };
  }
};

export const connect_to_mongodb = async (): Promise<Db> => {
  if (database) {
    return database;
  }

  // Validate production configuration first
  validate_production_config();
  
  const { uri: mongodb_uri, name: database_name } = get_database_config();

  try {
    client = new MongoClient(mongodb_uri);
    await client.connect();
    database = client.db(database_name);
    
    const environment = get_environment();
    console.log(`✅ Connected to MongoDB database: ${database_name} (${environment})`);
    console.log(`✅ MongoDB connection: ${redact_uri(mongodb_uri)}`);
    return database;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const get_database = (): Db => {
  if (!database) {
    throw new Error('Database not connected. Call connect_to_mongodb first.');
  }
  return database;
};

export const close_connection = async (): Promise<void> => {
  if (client) {
    await client.close();
    client = null;
    database = null;
  }
}; 