'use client';

import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CategoryError({ error, reset }: Props) {
  useEffect(() => {
    console.error('Category page error:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      context: 'Category Section',
    });
  }, [error]);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>📦 Category Error</h2>

      <p style={{ marginBottom: '1rem', color: '#666' }}>
        Unable to load category information. Please try again.
      </p>

      {process.env.NODE_ENV === 'development' && (
        <details
          style={{
            marginTop: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
          }}
        >
          <summary
            style={{
              cursor: 'pointer',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#374151',
            }}
          >
            🔍 Error Details (Development Only)
          </summary>

          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#dc2626' }}>Message:</strong>
              <p
                style={{
                  background: '#fef2f2',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  marginTop: '0.5rem',
                  color: '#991b1b',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                {error.message}
              </p>
            </div>

            {error.digest && (
              <div style={{ marginBottom: '1rem' }}>
                <strong>Error ID:</strong>
                <p
                  style={{
                    background: '#f9fafb',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    marginTop: '0.5rem',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                  }}
                >
                  {error.digest}
                </p>
              </div>
            )}

            <div>
              <strong>Stack Trace:</strong>
              <pre
                style={{
                  background: '#1f2937',
                  color: '#f3f4f6',
                  padding: '1rem',
                  borderRadius: '4px',
                  overflow: 'auto',
                  fontSize: '0.75rem',
                  lineHeight: '1.5',
                  marginTop: '0.5rem',
                }}
              >
                {error.stack}
              </pre>
            </div>
          </div>
        </details>
      )}

      <button
        onClick={() => reset()}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.875rem',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#2563eb')}
      >
        🔄 Try again
      </button>
    </div>
  );
}
