import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'dark' // default theme
  }),
  actions: {
    applyAttr(theme) {
      // Set both for compatibility with any existing usage
      document.documentElement.setAttribute('data-bs-theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.applyAttr(this.theme)
      localStorage.setItem('theme', this.theme)
    },
    setTheme(theme) {
      this.theme = theme
      this.applyAttr(this.theme)
      localStorage.setItem('theme', this.theme)
    }
  }
})
