import ApiClient from './api_services/ApiClient'

class AuthService {
  token!: any
  constructor () {
    this.token = localStorage.getItem("token")
  }

  async checkSession () {
    const response = this.token && await ApiClient.get('users/session')
    if (response.status !== 200) {
      localStorage.clear()
      return false
    }

    return response
  }
}

export default AuthService