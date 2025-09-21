<!-- src/components/Card.vue -->
<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="{ name: 'ProjectDetail', params: { id: project.id } }"
    class="block bg-white shadow-md rounded-lg overflow-hidden hover:bg-pink-50 transition transform hover:scale-[1.02]"
  >
    <!-- Immagine -->
    <img
      v-if="project?.images?.length"
      :src="project.images[0]"
      :alt="project.title || 'Anteprima progetto'"
      class="w-full h-48 object-cover"
    />
    <div v-else class="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
      Nessuna immagine
    </div>

    <!-- Testo -->
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 text-sm">{{ project.description }}</p>
    </div>
  </RouterLink>
</template>
