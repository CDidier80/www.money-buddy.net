import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ?  `${window.location.origin}/api` : 'http://localhost:3001/api'   // <-- for deployment ?  
// console.log("API BASELINE URL: ", url)

const ApiClient = axios.create({ baseURL: url }) 

// used only after user is logged in and authenticated. 
// They maintain authenticated status by checking the validity of the current token
ApiClient.interceptors.request.use(
    async (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
    },
    (err) => {
        // console.log("interceptors found auth failed")
        return Promise.reject(err)
})

export default ApiClient


    // console.log("interceptors fired")
    // console.log("token plucked from local storage: ", token)
    // console.log("config being returned:", config)
