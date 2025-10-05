<script setup>
  import { useThemeStore } from './stores/theme.js'
  const theme = useThemeStore()
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

