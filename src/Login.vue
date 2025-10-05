<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-2" style="width: 100%; max-width: 400px;">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="card-title">Login</h2>
          <router-link to="/" class="card-link"><i class="bi bi-arrow-left"></i></router-link>
        </div>
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
