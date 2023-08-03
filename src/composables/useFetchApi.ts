import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const BE_URL = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(options: AxiosRequestConfig): Promise<T> {
  const apiFetch: AxiosInstance = axios.create({
    baseURL: BE_URL,
  });
  return await apiFetch({
    ...options,
  });
}