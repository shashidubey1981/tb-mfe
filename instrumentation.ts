export async function register() {
  // Register OpenTelemetry instrumentation here
  // This runs once when the server starts
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side instrumentation
    console.log('Server instrumentation initialized');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime instrumentation
    console.log('Edge instrumentation initialized');
  }
}
