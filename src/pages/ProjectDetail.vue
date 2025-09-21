<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Caricamento / Errori -->
    <div v-if="loading" class="text-center text-gray-500 py-12">
      Caricamento progetto…
    </div>
    <div v-else-if="error" class="text-center text-red-600 py-12">
      Errore: {{ error }}
    </div>

    <!-- Contenuto -->
    <div v-else-if="project">
      <!-- Titolo + Torna al Portfolio -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <RouterLink
          to="/portfolio"
          class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500 transition"
        >
          Torna al Portfolio
        </RouterLink>
      </div>

      <!-- Slideshow -->
      <div v-if="project.images && project.images.length" class="relative w-full mb-4">
        <img
          :src="project.images[currentSlide]"
          :alt="project.title"
          class="w-full rounded-lg object-cover"
        />

        <!-- Frecce -->
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
      <div v-if="project.images && project.images.length" class="flex justify-center gap-2 mb-8">
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

      <!-- Navigazione Prev / Next -->
      <div class="flex justify-between items-center">
        <RouterLink
          v-if="prevProject"
          :to="{ name: 'ProjectDetail', params: { id: prevId } }"
          class="text-pink-600 hover:underline"
        >
          ← {{ prevProject.title }}
        </RouterLink>

        <span class="flex-1"></span>

        <RouterLink
          v-if="nextProject"
          :to="{ name: 'ProjectDetail', params: { id: nextId } }"
          class="text-pink-600 hover:underline"
        >
          {{ nextProject.title }} →
        </RouterLink>
      </div>
    </div>

    <!-- Nessun progetto trovato -->
    <div v-else class="text-center text-gray-500 py-12">
      Progetto non trovato.
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router"
import { ref, watch, onMounted, computed } from "vue"
import { doc, getDoc, getDocs, collection } from "firebase/firestore"
import { db } from "../firebase"

// Stati
const route = useRoute()
const project = ref(null)
const loading = ref(true)
const error = ref("")
const currentSlide = ref(0)

// Liste per prev/next
const allProjects = ref([])  // { id, title }
const allIds = ref([])
const currentIndex = ref(-1)

// Carica tutti i progetti
async function loadProjectsList() {
  const snap = await getDocs(collection(db, "projects"))
  allProjects.value = snap.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title
  }))
  allIds.value = allProjects.value.map(p => p.id)
}

// Carica singolo progetto
async function loadProject(id) {
  loading.value = true
  error.value = ""
  project.value = null
  currentSlide.value = 0
  try {
    const snap = await getDoc(doc(db, "projects", id))
    if (snap.exists()) {
      project.value = snap.data()
    }
  } catch (e) {
    error.value = e.message || "Errore sconosciuto"
  } finally {
    loading.value = false
  }
}

// Inizializza
onMounted(async () => {
  await loadProjectsList()
  await loadProject(route.params.id)
  currentIndex.value = allIds.value.indexOf(route.params.id)
})

// Aggiorna quando cambia id
watch(() => route.params.id, async (newId) => {
  await loadProject(newId)
  currentIndex.value = allIds.value.indexOf(newId)
  currentSlide.value = 0
})

// Prev/Next calcolati
const prevId = computed(() => currentIndex.value > 0 ? allIds.value[currentIndex.value - 1] : null)
const nextId = computed(() => currentIndex.value < allIds.value.length - 1 ? allIds.value[currentIndex.value + 1] : null)

const prevProject = computed(() => prevId.value ? allProjects.value.find(p => p.id === prevId.value) : null)
const nextProject = computed(() => nextId.value ? allProjects.value.find(p => p.id === nextId.value) : null)

// Slideshow
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
