<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="w-full flex justify-between items-center px-6 md:px-10 py-4">
      <!-- Logo + titolo -->
      <RouterLink to="/" class="flex items-center space-x-3">
        <img src="/images/logo-elisa-carretta.png" alt="Logo" class="h-10 w-auto" />
        <span class="text-xl font-bold">Portfolio</span>
      </RouterLink>

      <!-- Menu desktop -->
      <ul class="hidden md:flex space-x-8 text-lg font-medium">
        <li><RouterLink to="/" class="hover:text-pink-600 transition">Home</RouterLink></li>
        <li><RouterLink to="/portfolio" class="hover:text-pink-600 transition">Portfolio</RouterLink></li>
      </ul>

      <!-- Toggle mobile -->
      <button @click="isOpen = !isOpen" class="md:hidden text-2xl focus:outline-none">☰</button>
    </div>

    <!-- Menu mobile -->
    <div v-if="isOpen" class="md:hidden bg-white border-t shadow-md">
      <ul class="flex flex-col space-y-4 p-6 text-lg font-medium">
        <li><RouterLink to="/" @click="isOpen=false" class="hover:text-pink-600">Home</RouterLink></li>
        <li><RouterLink to="/portfolio" @click="isOpen=false" class="hover:text-pink-600">Portfolio</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const isOpen = ref(false)
</script>

