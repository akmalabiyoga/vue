<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-xxl">
        <a class="navbar-brand" href="#">My Vue App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <NavLink />
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavLink from './navlink.vue'
</script>

<style scoped></style>
