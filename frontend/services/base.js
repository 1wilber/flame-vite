import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5100',
  timeout: 1000,
  withCredentials: true
})
