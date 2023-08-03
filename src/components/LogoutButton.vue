<template>
    <div>
        <div class="flex justify-end py-4 px-6">
            <button @click="logout" class="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
    </div>
</template>
    
<script setup lang="ts">
    import { ref } from 'vue';
    const isLoggedIn = ref(false); // Initially not logged in
    
    const logout = () => {
    isLoggedIn.value = false; // Logout logic
    };
</script>
    
<style>
/* Add Tailwind CSS classes or customize as needed */
</style>