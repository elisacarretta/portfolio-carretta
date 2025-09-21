<template>
  <section>
    <div v-if="loading" class="text-center text-gray-500 py-12">
      Caricamento progetti…
    </div>
    <div v-else-if="error" class="text-center text-red-600 py-12">
      Errore: {{ error }}
    </div>
    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import Card from "./Card.vue"

const projects = ref([])
const loading = ref(true)
const error = ref("")

onMounted(async () => {
  try {
    const snap = await getDocs(collection(db, "projects"))
    projects.value = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    error.value = e.message || "Errore sconosciuto"
  } finally {
    loading.value = false
  }
})
</script>
