import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ?  `${window.location.origin}/api` : 'http://localhost:3001/api'  

const ApiClient = axios.create({ baseURL: url }) 

ApiClient.interceptors.request.use(

    // Our application's server can create, run logic on, and send JSON web tokens to the front end.

    // Axios interceptors allow the front end to send json web tokens to BACK to the server.

    // full token path:  controllers --> client ..... client --> interceptors --> server

    // Without interceptors, there's no way to authenticate a user's token because local storage --
    // the location for storing JWTs on the client-side -- exists only in the user's browser and
    // cannot be sent to our server.

    // So Axios interceptors simply copy/paste the token value from local storage 
    // into the header of http requests.

    // when tokens arrive back to the server, controller functions can verify that the received token
    // was, in fact, created by our server at a recorded time.

    // prefacing token with word "Bearer" is optional

    async (config) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = token
        return config
        },
        (err) => Promise.reject(err)
)


export default ApiClient

