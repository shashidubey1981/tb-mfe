'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error
    console.error('CRITICAL - Global error caught:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      name: error.name,
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '1rem',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                }}
              >
                💥
              </div>
              <h1
                style={{
                  color: '#dc2626',
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                Critical Application Error
              </h1>
              <p style={{ color: '#6b7280' }}>Something went wrong at the application root level</p>
            </div>

            {/* Development mode - show full error */}
            {process.env.NODE_ENV === 'development' && (
              <details
                style={{
                  marginBottom: '1.5rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1rem',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: '0.5rem',
                  }}
                >
                  🔍 Error Details (Development Only)
                </summary>

                <div style={{ marginTop: '1rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#dc2626' }}>Error Name:</strong>
                    <p
                      style={{
                        background: '#fef2f2',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        marginTop: '0.5rem',
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                      }}
                    >
                      {error.name}
                    </p>
                  </div>

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
                      <strong>Digest:</strong>
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
                        maxHeight: '300px',
                      }}
                    >
                      {error.stack}
                    </pre>
                  </div>
                </div>
              </details>
            )}

            {/* Production mode - minimal info */}
            {process.env.NODE_ENV === 'production' && error.digest && (
              <div
                style={{
                  background: '#f9fafb',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <strong>Error Reference:</strong> {error.digest}
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    marginTop: '0.5rem',
                  }}
                >
                  Please provide this reference when contacting support.
                </p>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => reset()}
                style={{
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
                🔄 Try Again
              </button>

              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#4b5563')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#6b7280')}
              >
                🏠 Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
