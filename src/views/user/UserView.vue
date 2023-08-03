<template>
  <div class="flex">
    <div class="w-1/2 text-3xl font-bold underline bg-red-200 flex justify-center items-center">
      Welcome
    </div>

    <div class="w-1/2 logout text-1xl font-bold bg-red-100 flex justify-center items-center space-x-3 p-2">
      <!-- <LogoutButton @click="routeToLogout" /> -->
      <pv-button class="btn flex justify-center items-center w-35 m-3" label="Logout" severity="secondary" @click="routeToLogout">Logout</pv-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
//import LogoutButton from '../../components/LogoutButton.vue';

const routeToLogout = async (): Promise<void> => {
  try {
    // Get the authentication token from localStorage or wherever it is stored
    const authToken = localStorage.getItem('authToken');

    // Set the token in the request header
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    // Send a request to the logout endpoint [ASP.NET WebAPI] with the token in the header
    await axios.get('http://localhost:5267/api/Account/logout', config);
    // Clear the authentication token from localStorage or remove any other session-related data
    localStorage.removeItem('authToken');
  } catch (error) {
    console.error('Logout error:', error);
  }
  router.push('/login');
};
</script>

  

  