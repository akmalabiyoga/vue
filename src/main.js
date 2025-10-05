import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import mainRoute from './router/mainroute.js'
import { createRouter, createWebHistory } from 'vue-router'
import { apiBaseUrl } from './services/api'

const router = createRouter({
  history: createWebHistory(),
  routes: mainRoute
})

// I'm using Bun.js
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.provide('apiBaseUrl', apiBaseUrl)
app.config.globalProperties.$apiBaseUrl = apiBaseUrl
app.mount('#app')
