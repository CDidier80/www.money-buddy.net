import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? 
    `${window.location.origin}/api` : 'http://localhost:3001/api'  

const ApiClient = axios.create({ baseURL: url }) 

ApiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = token
        return config
        },
        (err) => Promise.reject(err)
)

export default ApiClient
