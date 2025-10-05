<template>
  <div class="container-xxl">
    <div class="d-flex justify-content-between align-items-center my-3 mx-2">
      <h1 class="h3">API Demo</h1>
      <div>
        <button class="btn btn-sm btn-primary" @click="fetchData">Fetch Data</button>
      </div>
    </div>
    <div>
      <div class="card">
        <div class="card-body">
          <pre v-if="apiData">{{ JSON.stringify(apiData, null, 2) }}</pre>
          <p v-else>No data fetched yet. Click the button above to fetch data.</p>
        </div>
      </div>
    </div>
    <!-- <pre>{{ apiData }}</pre> -->
  </div>
</template>

<script setup>
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
</script>
