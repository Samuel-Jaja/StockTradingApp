<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-6 shadow rounded w-80">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form class="space-y-4">
        <div class="flex flex-col">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
            v-model="credential.email"
            type="email"
            id="email"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="text-sm font-medium">Password</label>
          <input
            v-model="credential.password"
            type="password"
            id="password"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <button @click="onLogin" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LoginCredential } from './types';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const { login } = useAuthStore();
const router = useRouter();
const credential = ref<LoginCredential>({} as LoginCredential);

const onLogin = (e: Event) => {
  e.preventDefault(); // Prevent form submission

  login(credential.value)
    .then((response) => {
      console.log('Response data:', response);
      const userToken = response.token;
      console.log('User token:', userToken);
      localStorage.setItem('userToken', userToken);
      router.push('/user');
    })
    .catch((error) => {
      console.error(error);
    });
};

      // OLD IMPLEMENTATION
      // import axios from 'axios';
      // import { useRouter } from 'vue-router';
      // const router = useRouter();

      // const email = ref('');
      // const password = ref('');
      
      // const login = async (e:Event) => {
      // try {
      //     e.preventDefault()
      //     const response = await axios.post('http://localhost:5267/api/Account/login',{
      //     email: email.value,
      //     password: password.value,
      //   }, 
      //   {
      //     headers: {
      //       'Content-Type': 'application/json' 
      //     }
      //   });
      //   console.log(response.data);
      //   if(response.data){
      //     router.push('/user')
      //   }
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

</script>

<style>
/* Add any custom styles here */
</style>
