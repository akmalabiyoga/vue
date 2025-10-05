<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-2" style="width: 100%; max-width: 400px;">
      <div class="card-body">
        <h2 class="card-title mb-4">Register</h2>
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { apiFetch } from './services/api'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const email = ref('')
const name = ref('')
const password = ref('')
// async function registerUser() {
//   try {
//     const body = {
//       username: username.value,
//       email: email.value,
//       name: name.value,
//       password: password.value
//     }
//     const data = await apiFetch('/users/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     })
//     console.log('Registration successful:', data)
//     // Redirect to login page after successful registration
//     router.push('/login')
//   } catch (error) {
//     console.error('Registration error:', error)
//   }
// }
// use axios
async function registerUser() {
  try {
    const body = {
      username: username.value,
      email: email.value,
      name: name.value,
      password: password.value
    }
    const response = await axios.post('http://localhost:3000/users/register', body)
    console.log('Registration successful:', response.data)
    // Redirect to login page after successful registration
    router.push('/login')
  } catch (error) {
    console.error('Registration error:', error)
  }
}
</script>
