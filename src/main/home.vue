<template>
  <div class="container-xxl">
    <h2>API Demo</h2>
    <p>Check the console for API call results.</p>
    <button class="btn btn-sm btn-primary" @click="fetchData">Fetch Data</button>
    <!-- show the data -->
    <pre>{{ apiData }}</pre>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { ref } from 'vue'

const apiData = ref(null)
import { apiFetch } from '../services/api'

async function fetchData() {
  try {
    const data = await apiFetch('/users/')
    apiData.value = data
    console.log('API Data:', data)
  } catch (error) {
    console.error('API Error:', error)
  }
}
const counter = useCounterStore()
</script>
