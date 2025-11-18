// Experiment tracking utility for H17 - Keep My Data Local test
// Logs user interactions to localStorage and browser console for analysis

interface TrackingEvent {
  timestamp: number;
  eventType: string;
  variant: string;
  screen: string;
  details?: Record<string, any>;
}

const STORAGE_KEY = 'h17_experiment_events';
const SESSION_ID = typeof window !== 'undefined' ? 
  sessionStorage.getItem('h17_session_id') || generateSessionId() : '';

function generateSessionId(): string {
  const id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('h17_session_id', id);
  }
  return id;
}

export function trackEvent(
  eventType: string,
  variant: string,
  screen: string,
  details?: Record<string, any>
): void {
  const event: TrackingEvent = {
    timestamp: Date.now(),
    eventType,
    variant,
    screen,
    details,
  };

  // Log to console for debugging
  console.log('[v0] H17 Event:', event);

  // Store in localStorage for data export
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const events = existing ? JSON.parse(existing) : [];
      events.push(event);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (e) {
      console.error('[v0] Failed to store event:', e);
    }
  }

  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('track', `h17_${eventType}`, {
      variant,
      screen,
      ...details,
    });
  }
}

export function exportTrackingData(): string {
  if (typeof window === 'undefined') return '';
  
  try {
    const events = localStorage.getItem(STORAGE_KEY);
    const data = {
      sessionId: SESSION_ID,
      exportTime: new Date().toISOString(),
      events: events ? JSON.parse(events) : [],
    };
    return JSON.stringify(data, null, 2);
  } catch (e) {
    console.error('[v0] Failed to export tracking data:', e);
    return '';
  }
}

export function clearTrackingData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem('h17_session_id');
  }
}
