<!-- src/pages/ProjectDetail.vue -->
<template>
  <div v-if="project" class="max-w-4xl mx-auto px-4 py-12">
    <!-- Titolo + bottone torna -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">{{ project.title }}</h1>
      <RouterLink
        to="/portfolio"
        class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      >
        Torna al Portfolio
      </RouterLink>
    </div>

    <!-- Slideshow -->
    <div class="relative w-full mb-4">
      <img
        :src="project.images[currentSlide]"
        :alt="project.title"
        class="w-full rounded-lg object-cover"
      />

      <button
        @click="prevSlide"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        ‹
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        ›
      </button>
    </div>

    <!-- Indicatori -->
    <div class="flex justify-center gap-2 mb-8">
      <button
        v-for="(img, idx) in project.images"
        :key="idx"
        @click="currentSlide = idx"
        :class="[
          'w-3 h-3 rounded-full transition',
          currentSlide === idx ? 'bg-pink-600' : 'bg-gray-300 hover:bg-gray-400'
        ]"
      />
    </div>

    <!-- Descrizione -->
    <p class="text-lg text-gray-700 mb-8">{{ project.description }}</p>

    <!-- Navigazione tra progetti con titolo -->
    <div class="flex justify-between items-center">
      <RouterLink
        v-if="prevProject"
        :to="`/portfolio/${prevProject.id}`"
        class="text-pink-600 hover:underline"
      >
        ← {{ prevProject.title }}
      </RouterLink>

      <span></span>

      <RouterLink
        v-if="nextProject"
        :to="`/portfolio/${nextProject.id}`"
        class="text-pink-600 hover:underline"
      >
        {{ nextProject.title }} →
      </RouterLink>
    </div>
  </div>

  <!-- Loading -->
  <div v-else class="text-center py-20">Caricamento...</div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { db } from '../firebase'
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'

const route = useRoute()
const project = ref(null)
const allProjects = ref([])   // [{ id, title, ... }]
const currentSlide = ref(0)

// --- helper ---
async function loadAllProjectsOrdered() {
  const snap = await getDocs(query(collection(db, 'projects'), orderBy('__name__')))
  allProjects.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

async function loadProjectById(id) {
  const snap = await getDoc(doc(db, 'projects', id))
  project.value = snap.exists() ? { id: snap.id, ...snap.data() } : null
  currentSlide.value = 0
  // opzionale: riportati in alto quando cambi progetto
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// --- init ---
onMounted(async () => {
  await loadAllProjectsOrdered()
  await loadProjectById(route.params.id)
})

// --- reagisci al cambio di :id (Prev/Next o navigazione diretta) ---
watch(() => route.params.id, async (newId) => {
  if (!newId) return
  await loadProjectById(newId)
})

// --- prev/next calcolati sull’ordine per id (project1, project2, ...) ---
const currentIndex = computed(() =>
  allProjects.value.findIndex(p => p.id === route.params.id)
)

const prevProject = computed(() =>
  currentIndex.value > 0 ? allProjects.value[currentIndex.value - 1] : null
)

const nextProject = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < allProjects.value.length - 1
    ? allProjects.value[currentIndex.value + 1]
    : null
)

// --- slideshow ---
const nextSlide = () => {
  if (project.value?.images?.length) {
    currentSlide.value = (currentSlide.value + 1) % project.value.images.length
  }
}
const prevSlide = () => {
  if (project.value?.images?.length) {
    currentSlide.value =
      (currentSlide.value - 1 + project.value.images.length) % project.value.images.length
  }
}
</script>
