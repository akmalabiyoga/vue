// Simple API service that reads the base URL from Vite env variables.
// The user will create a .env file with VITE_API_URL (e.g. VITE_API_URL=http://localhost:3000)

export const apiBaseUrl = import.meta.env.VITE_API_URL || ''
// Minimal axios wrapper. Keeps apiBaseUrl export and exposes apiFetch(path, options)
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: apiBaseUrl || undefined,
  headers: { 'Content-Type': 'application/json' }
})

export async function apiFetch(path, options = {}) {
  // options may include { method, data, params, headers }
  const config = { url: path, ...options }
  try {
    const res = await axiosInstance.request(config)
    return res.data
  } catch (err) {
    // normalize error slightly
    const error = new Error(err.message || 'API request failed')
    error.status = err.response?.status
    error.body = err.response?.data
    throw error
  }
}
