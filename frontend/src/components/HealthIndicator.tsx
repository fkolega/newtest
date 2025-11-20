import { useEffect, useState, useCallback, useRef } from 'react';
import { api_fetch } from '@/lib/api';

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
          message: data.message || 'Server is available',
          timestamp: data.timestamp,
          mongodb: data.mongodb || 'unknown'
        });
      }
    } catch {
      if (isMounted.current) {
        setHealth({
          status: 'unhealthy',
          message: 'Cannot connect to backend',
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
      text: '[PING]', 
      color: 'bg-gray-600', 
      borderColor: 'brutalist-border',
      pulse: true 
    };
    if (isChecking) return { 
      text: '[CONNECTING...]', 
      color: 'bg-yellow-400', 
      borderColor: 'brutalist-border-primary',
      pulse: true 
    };
    if (health?.status === 'healthy') return { 
      text: '[PONG] SYSTEM_OK', 
      color: 'bg-cyan-400', 
      borderColor: 'brutalist-border-accent',
      pulse: false 
    };
    return { 
      text: '[ERROR] NO_CONNECTION', 
      color: 'bg-red-500', 
      borderColor: 'brutalist-border-secondary',
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
        className={`w-full bg-black text-white mono font-bold text-lg py-4 px-6 ${status.borderColor} ${
          isClickable ? 'brutalist-hover cursor-pointer brutalist-shadow' : 'cursor-default'
        } ${status.pulse ? 'animate-pulse' : ''}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-4 h-4 mr-4 ${status.color} ${status.pulse ? 'animate-pulse' : ''}`}></div>
            <span>{status.text}</span>
          </div>
          
          {health && health.status === 'healthy' && (
            <div className="text-right text-sm">
              <div className="text-cyan-400">DB: {health.mongodb}</div>
              <div className="text-white opacity-70">
                {new Date(health.timestamp).toLocaleTimeString()}
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Additional system info when active */}
      {isActive && health && (
        <div className="mt-4 bg-white text-black brutalist-border p-4">
          <div className="mono text-sm space-y-2">
            <div className="flex justify-between">
              <span className="font-bold">STATUS:</span>
              <span className={health.status === 'healthy' ? 'text-green-600' : 'text-red-600'}>
                {health.status.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">MESSAGE:</span>
              <span>{health.message}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">DATABASE:</span>
              <span className="text-cyan-600">{health.mongodb}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">TIMESTAMP:</span>
              <span>{new Date(health.timestamp).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}