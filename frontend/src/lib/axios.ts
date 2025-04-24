import axiosInstance from 'axios';
import { env } from '@/config/env';

export const axios = axiosInstance.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
