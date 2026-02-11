/**
 * Debug utilities for development
 * These helpers provide consistent logging across the application
 */

const isDev = process.env.NODE_ENV === 'development';

export const debug = {
  /**
   * Log general information (only in development)
   */
  log: (label: string, data?: any) => {
    if (isDev) {
      console.log(`[${label}]`, data !== undefined ? data : '');
    }
  },

  /**
   * Log errors with structured data
   */
  error: (label: string, error: any) => {
    console.error(`[${label}]`, {
      message: error?.message || error,
      stack: error?.stack,
      name: error?.name,
      ...(typeof error === 'object' ? error : {}),
    });
  },

  /**
   * Log warnings (only in development)
   */
  warn: (label: string, data?: any) => {
    if (isDev) {
      console.warn(`[${label}]`, data);
    }
  },

  /**
   * Display data in table format (only in development)
   */
  table: (label: string, data: any) => {
    if (isDev) {
      console.log(`[${label}]`);
      console.table(data);
    }
  },

  /**
   * Group related logs together (only in development)
   */
  group: (label: string, callback: () => void) => {
    if (isDev) {
      console.group(label);
      callback();
      console.groupEnd();
    }
  },

  /**
   * Time how long operations take (only in development)
   */
  time: (label: string) => {
    if (isDev) {
      console.time(label);
    }
  },

  timeEnd: (label: string) => {
    if (isDev) {
      console.timeEnd(label);
    }
  },

  /**
   * Log API requests and responses
   */
  api: {
    request: (url: string, options?: RequestInit) => {
      if (isDev) {
        console.log('🌐 API Request:', {
          url,
          method: options?.method || 'GET',
          headers: options?.headers,
          body: options?.body,
        });
      }
    },

    response: (url: string, status: number, data?: any) => {
      if (isDev) {
        const emoji = status >= 200 && status < 300 ? '✅' : '❌';
        console.log(`${emoji} API Response:`, {
          url,
          status,
          data,
        });
      }
    },

    error: (url: string, error: any) => {
      console.error('❌ API Error:', {
        url,
        error: error?.message || error,
        stack: error?.stack,
      });
    },
  },

  /**
   * Log component lifecycle events (only in development)
   */
  component: {
    mount: (componentName: string, props?: any) => {
      if (isDev) {
        console.log(`🎨 [${componentName}] Mounted`, props);
      }
    },

    unmount: (componentName: string) => {
      if (isDev) {
        console.log(`🗑️ [${componentName}] Unmounted`);
      }
    },

    render: (componentName: string, reason?: string) => {
      if (isDev) {
        console.log(`🔄 [${componentName}] Re-rendered`, reason ? `(${reason})` : '');
      }
    },
  },
};

/**
 * Assert a condition and log error if false
 */
export function assert(condition: boolean, message: string): void {
  if (!condition) {
    console.error('❌ Assertion failed:', message);
    // Debugger removed for lint compliance - use browser breakpoints instead
    throw new Error(`Assertion failed: ${message}`);
  }
}

/**
 * Pretty print objects for debugging
 */
export function prettyPrint(obj: any, label?: string): void {
  if (isDev) {
    if (label) console.log(label);
    console.log(JSON.stringify(obj, null, 2));
  }
}
