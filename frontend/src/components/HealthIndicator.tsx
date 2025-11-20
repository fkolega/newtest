import { useEffect, useState, useCallback, useRef } from 'react';
import { api_fetch } from '@/lib/api';
import { Activity, Database, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  message: string;
  timestamp: string;
  mongodb: string;
}

export function HealthIndicator() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkHealth = useCallback(async (isMounted: { current: boolean }) => {
    if (!isMounted.current) return;
    
    setIsChecking(true);
    
    try {
      const response = await api_fetch('/api/health');
      if (!response.ok) throw new Error('Health check failed');
      
      const data = await response.json();
      if (isMounted.current) {
        setHealth({
          status: data.status === 'healthy' ? 'healthy' : 'unhealthy',
          message: data.message || 'Sacred flames burn bright',
          timestamp: data.timestamp,
          mongodb: data.mongodb || 'unknown'
        });
      }
    } catch {
      if (isMounted.current) {
        setHealth({
          status: 'unhealthy',
          message: 'The spirits have departed',
          timestamp: new Date().toISOString(),
          mongodb: 'unknown'
        });
      }
    } finally {
      if (isMounted.current) {
        setIsChecking(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const isMounted = { current: true };

    // Check immediately
    checkHealth(isMounted);

    // Then check every 10 seconds
    intervalRef.current = setInterval(() => checkHealth(isMounted), 10000);

    return () => {
      isMounted.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, checkHealth]);

  const getStatus = () => {
    if (!isActive) return { 
      text: 'Commune with Spirits', 
      color: 'text-yellow-400', 
      bgColor: 'bg-yellow-900/30',
      icon: Activity,
      pulse: true 
    };
    if (isChecking) return { 
      text: 'Consulting the Oracles...', 
      color: 'text-yellow-300', 
      bgColor: 'bg-yellow-800/40',
      icon: Activity,
      pulse: true 
    };
    if (health?.status === 'healthy') return { 
      text: 'Spirits are Content', 
      color: 'text-green-400', 
      bgColor: 'bg-green-900/30',
      icon: CheckCircle,
      pulse: false 
    };
    return { 
      text: 'Spirits Have Fled', 
      color: 'text-red-400', 
      bgColor: 'bg-red-900/30',
      icon: AlertCircle,
      pulse: true 
    };
  };

  const status = getStatus();
  const isClickable = !isActive;

  return (
    <div className="w-full">
      <button
        onClick={isClickable ? () => setIsActive(true) : undefined}
        disabled={!isClickable}
        className={`w-full ${status.bgColor} text-foreground medieval-serif font-semibold text-lg py-4 px-6 medieval-border medieval-shadow ${
          isClickable ? 'medieval-hover cursor-pointer' : 'cursor-default'
        } ${status.pulse ? 'animate-pulse' : ''}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <status.icon className={`w-5 h-5 ${status.color} ${status.pulse ? 'animate-pulse' : ''}`} />
            <span className={status.color}>{status.text}</span>
          </div>
          
          {health && health.status === 'healthy' && (
            <div className="text-right text-sm">
              <div className="text-green-400 flex items-center gap-1">
                <Database className="w-4 h-4" />
                {health.mongodb}
              </div>
              <div className="text-foreground/70 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {new Date(health.timestamp).toLocaleTimeString()}
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Additional system info when active - Medieval styled */}
      {isActive && health && (
        <div className="mt-4 parchment-bg medieval-border medieval-shadow p-6">
          <h4 className="medieval-script font-bold text-lg text-brown-900 mb-4 text-center">
            Oracle's Divination
          </h4>
          <div className="medieval-serif text-sm space-y-3 text-brown-800">
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Sacred Status:
              </span>
              <span className={`font-bold ${health.status === 'healthy' ? 'text-green-700' : 'text-red-700'}`}>
                {health.status === 'healthy' ? 'Blessed' : 'Cursed'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Divine Message:
              </span>
              <span className="text-right max-w-xs">{health.message}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-2">
                <Database className="w-4 h-4" />
                Sacred Scrolls:
              </span>
              <span className="text-green-700 font-mono">{health.mongodb}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Moment of Vision:
              </span>
              <span className="font-mono text-xs">{new Date(health.timestamp).toLocaleString()}</span>
            </div>
          </div>
          
          {/* Medieval blessing at bottom */}
          <div className="text-center mt-4 pt-4 border-t border-yellow-700">
            <p className="medieval-script text-brown-700 text-xs italic">
              "Thus speak the digital oracles"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}