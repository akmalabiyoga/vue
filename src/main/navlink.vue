<script setup>
import { useNavlinkStore } from '../stores/navlink'
import { useThemeStore } from '../stores/theme.js'
import { computed } from 'vue'
const theme = useThemeStore()
const navlink = useNavlinkStore()
</script>

<template>
  <!-- implement with child/dropdown -->
  <div class="d-flex w-100 justify-content-between align-items-center">
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
    <!-- for login/register -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <!-- toggle dark/light theme -->
        <button class="nav-link btn" @click="theme.toggleTheme">
          <i class="bi" :class="theme.theme === 'dark' ? 'bi-sun' : 'bi-moon'" aria-hidden="true"></i>
        </button>
      </li>
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/login">
          <i class="bi bi-box-arrow-in-right me-2" aria-hidden="true"></i>
          Login
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/register">
          <i class="bi bi-person-plus me-2" aria-hidden="true"></i>
          Register
        </router-link>
      </li>
    </ul>
  </div>
</template>
