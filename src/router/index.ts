// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/home/HomeView.vue'
// import LoginView from '@/views/auth/LoginView.vue'
// import RegisterView from '@/views/auth/RegisterView.vue'

// const routes = [
//   {
//     path: '/',
//     redirect: (to: any) => 'home',
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: async () => await import('../views/home/HomeView.vue'),
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: async () => await import('../views/auth/LoginView.vue')
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: async () => await import('../views/auth/RegisterView.vue')
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import UserView from '@/views/user/UserView.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

