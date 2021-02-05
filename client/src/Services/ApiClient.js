import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ?  `${window.location.origin}/api` : 'http://localhost:3001/api'  

const ApiClient = axios.create({ baseURL: url }) 

ApiClient.interceptors.request.use(
    async (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
    },
    (err) => {
        return Promise.reject(err)
})

export default ApiClient

