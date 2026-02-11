import { NextResponse } from 'next/server';
import { debug } from '../../../lib/debug';
import pinoLogger from '../../../lib/logger/pino';
import winstonLogger from '../../../lib/logger/winston';

export async function GET() {
  try {
    // Log with debug utility
    debug.log('HealthCheck', 'Health check endpoint called');

    // Log with traditional loggers
    pinoLogger.info('Health check endpoint called');
    winstonLogger.info('Health check endpoint called');

    const response = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    };

    debug.api.response('/api/health', 200, response);

    return NextResponse.json(response);
  } catch (error) {
    debug.error('HealthCheckError', error);

    return NextResponse.json(
      {
        status: 'error',
        message: 'Health check failed',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
