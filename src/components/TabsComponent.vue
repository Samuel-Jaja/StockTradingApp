<template>
    <div style="background-color: #eee">
      <pv-tab-menu :model="tabs" />
      <router-view />
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    tabs: {
      type: Array,
      default: () => {},
    },
  });
  </script>