<template>
  <footer class="w-full bg-gray-900 text-gray-200 py-8 mt-12">
    <!-- contenuto con padding ma senza max-w -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-10">
      <!-- Copyright -->
      <p class="text-sm">&copy; 2025 Elisa Carretta. Tutti i diritti riservati.</p>

      <!-- Contatti -->
      <div class="flex gap-6">
        <a href="mailto:elisa.carretta.design@gmail.com" class="hover:text-pink-400 transition flex items-center gap-2">
          <Mail class="w-5 h-5" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/elisa-carretta/" target="_blank" class="hover:text-pink-400 transition flex items-center gap-2">
          <Linkedin class="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/elisacarretta" target="_blank" class="hover:text-pink-400 transition flex items-center gap-2">
          <Github class="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Linkedin, Github } from "lucide-vue-next"
</script>


