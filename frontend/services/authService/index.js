import api from '@/services/base'

const authService = {
  signIn: (params) => api.post('/users/sign_in', params)
}

export default authService
