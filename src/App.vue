<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col w-full">
    <Navbar />
    <main class="flex-1 w-full">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
}
</style>





