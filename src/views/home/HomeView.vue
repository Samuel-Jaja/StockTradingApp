<template>
  <div class="flex">
    <div class="w-1/2 text-3xl font-bold underline bg-red-200 flex justify-center items-center">
      Stock Trading System
    </div>

    <div class="w-1/2 logout text-3xl font-bold bg-red-100 flex justify-center items-center space-x-3 p-2">
      <pv-button class="btn flex justify-center items-center w-35 m-3" label="Login" severity="secondary" @click="routeToLogin">Login</pv-button>
      <pv-button class="btn flex justify-center items-center w-35 m-3" label="Register" severity="secondary" @click="routeToRegister">Register</pv-button>
    </div>
  </div>

  <tabs-component
    :tabs="tabMenus"
    class="my-5 mx-1"
    style="background-color: #ffffff"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabsComponent from '../../components/TabsComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const routeToLogin = (): void => {
  router.push('/login');
};

const routeToRegister = (): void => {
  router.push('/register');
};

const tabMenus = ref([
  {
    label: 'Users',
    to: '/home/users',
  },
  {
    label: 'Stocks',
    to: '/home/stocks',
  },
  {
    label: 'Exchange Rate',
    to: '/home/exchange-rate',
  },
  {
    label: 'BlockChain',
    to: '/home/block-chain',
  },
  {
    label: 'Machine Learning',
    to: '/home/machine-learning',
  },
  {
    label: 'AI',
    to: '/home/ai',
  },
  {
    label: 'Software',
    to: '/home/software',
  },
  {
    label: 'Devops',
    to: '/home/devops',
  }
]);
</script>
