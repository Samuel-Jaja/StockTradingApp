<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-6 shadow rounded w-1/3">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form class="space-y-4">
        <div class="flex flex-col">
          <label for="personname" class="text-sm font-medium">Name</label>
          <input
            v-model="personname"
            type="text"
            id="personname"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex flex-col">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex flex-col">
          <label for="phonenumber" class="text-sm font-medium">Phone Number</label>
          <input
            v-model="phonenumber"
            type="tel"
            id="phonenumber"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex flex-col">
          <label for="confirmPassword" class="text-sm font-medium">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            class="border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <button @click="register" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const personname = ref('');
const email = ref('');
const phonenumber = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = async (e: Event) => {
  try {
    e.preventDefault();
    const response = await axios.post('http://localhost:5267/api/Account/register', {
      personname: personname.value,
      email: email.value,
      phonenumber: phonenumber.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }, 
    {
      headers: {
        'Content-Type': 'application/json' 
      }
    });
    console.log(response.data);
    if(response.data){
      router.push('/login')
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style>

</style>
