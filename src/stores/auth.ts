import { defineStore } from "pinia";
import { apiFetch } from '../composables/useFetchApi';
import type { LoginCredential, LoginResponse } from '../views/auth/types';
import type { AxiosResponse } from 'axios';

export const useAuthStore = defineStore('authentication', () => {
  async function login(body: LoginCredential): Promise<LoginResponse> {
    const response = await apiFetch<AxiosResponse<LoginResponse>>({
      method: 'post',
      url: '/api/Account/login',
      data: body,
    });
    
    return response.data; // Return the response data directly
  }

  return { login };
});
