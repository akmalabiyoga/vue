<script setup>
import { useNavlinkStore } from '../stores/navlink'
const navlink = useNavlinkStore()
</script>

<template>
  <!-- implement with child/dropdown -->
  <ul class="navbar-nav">
    <template v-for="link in navlink.links" :key="link.name">
      <li v-if="link.child" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ link.name }}
        </a>
        <ul class="dropdown-menu">
          <li v-for="sublink in link.child" :key="sublink.name">
            <router-link class="dropdown-item" :to="sublink.path">
              {{ sublink.name }}
            </router-link>
          </li>
        </ul>
      </li>
      <li v-else class="nav-item">
        <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
      </li>
    </template>
  </ul>
</template>
