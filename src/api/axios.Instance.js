import axios from 'axios'
import authConfig from '../configs/auth'

let BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

if (!BASE_URL) {
  throw new Error('Environment variable NEXT_PUBLIC_API_BASE_URL is required')
}

if (BASE_URL.endsWith('/')) {
  BASE_URL = BASE_URL.slice(0, BASE_URL.length - 1)
}

const axiosInstance = axios.create({
  baseURL: BASE_URL + '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem(authConfig.storageTokenKeyName)

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === 401) {
      }
    } else {
      // handle network or other errors
      console.error(error)
    }

    return Promise.reject(error)
  }
)

export { axiosInstance, BASE_URL }
