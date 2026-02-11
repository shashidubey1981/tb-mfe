import axios from 'axios';
import pinoLogger from './logger/pino';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    pinoLogger.info(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  error => {
    pinoLogger.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    pinoLogger.info(`Response: ${response.status} ${response.config.url}`);
    return response;
  },
  error => {
    pinoLogger.error({
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      type: 'Response error',
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
