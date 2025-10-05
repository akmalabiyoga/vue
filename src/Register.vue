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
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>
