import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import mainRoute from './router/mainroute.js'
import defaultRoute from './router/defaultroute.js'
import { createRouter, createWebHistory } from 'vue-router'
import { apiBaseUrl } from './services/api'

const router = createRouter({
  history: createWebHistory(),
  routes: [...mainRoute, ...defaultRoute]
})

// I'm using Bun.js
const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)

// Initialize theme from localStorage (or keep default from store)
// import the store after pinia is registered
import { useThemeStore } from './stores/theme'
const themeStore = useThemeStore(pinia)
const saved = localStorage.getItem('theme') || themeStore.theme
themeStore.setTheme(saved)

app.provide('apiBaseUrl', apiBaseUrl)
app.config.globalProperties.$apiBaseUrl = apiBaseUrl
app.mount('#app')
