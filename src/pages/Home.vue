<template>
  <section class="min-h-screen bg-white flex flex-col items-center py-12">
    <!-- Hero -->
    <div class="max-w-6xl mx-auto w-full mb-16 px-4">
      <!-- Titolo in alto -->
      <h1 class="text-5xl font-bold text-gray-900 mb-12 text-left">
        Ciao, sono Elisa
      </h1>

      <!-- Layout con flex -->
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <!-- Foto -->
        <div class="w-72 h-72 bg-white shadow-md rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src="/images/foto-profilo.png"
            alt="Foto di Elisa"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Testo -->
        <div class="text-left md:ml-6 mt-6 md:mt-0">
          <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
           Sono una studentessa di Digital design, appassionata di comunicazione visiva, 
          UX/UI e branding. In questo sito troverai alcuni dei miei progetti.
            <br /><br />
            Negli ultimi anni ho sviluppato competenze nell’ambito del 
        design digitale, imparando a muovermi tra strumenti di grafica, 
        sviluppo front-end e progettazione di identità di marca. 
        Sono appassionata di design, illustrazione, cinema, musica e branding. 
        In ogni progetto cerco di unire creatività e funzionalità, per raggiungere gli obiettivi preposti 
        ed esaudire i desideri di ogni cliente. 
          </p>
        </div>
      </div>
    </div>

    <!-- Sezione skill -->
    <div class="max-w-6xl mx-auto w-full mb-12 px-4">
      <h2 class="text-3xl font-bold text-gray-900 text-left mb-8">Le mie competenze</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
            <h3 class="text-xl font-semibold mb-2">Graphic Design</h3>
          <p class="text-gray-600">Adobe Photoshop, Illustrator, InDesign</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
          <h3 class="text-xl font-semibold mb-2">Web Design & UX/UI</h3>
          <p class="text-gray-600">Figma, ProtoPie, Wireframing</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
          <h3 class="text-xl font-semibold mb-2">Sviluppo Front-end</h3>
          <p class="text-gray-600">HTML, CSS, JavaScript, Vue.js</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
          <h3 class="text-xl font-semibold mb-2">Multimedia</h3>
          <p class="text-gray-600">Video editing, Animazioni, Motion Graphic</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
          <h3 class="text-xl font-semibold mb-2">Gestione Progetti</h3>
          <p class="text-gray-600">Teamwork, Presentazioni, Comunicazione</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 hover:bg-pink-100 transition">
          <h3 class="text-xl font-semibold mb-2">Strumenti Digitali</h3>
          <p class="text-gray-600">Notion, Webflow, GitHub</p>
        </div>
      </div>
    </div>

    <!-- CTA finale -->
    <RouterLink
      to="/portfolio"
      class="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
    >
      Vai al Portfolio →
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router"
</script>
