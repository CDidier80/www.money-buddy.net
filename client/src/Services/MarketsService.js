import axios from "axios"
require('dotenv').config()


const baseline = { baseURL: "https://finnhub.io/api/v1/" }
const FinnhubApi = axios.create(baseline) 

const key = process.env.REACT_APP_FINNHUB_API_KEY
const sandbox_key = process.env.REACT_APP_FINNHUB_SANDBOX_API_KEY


export const GetAllSymbols = async () => {
    const extendedUrl = "/stock/symbol?exchange=US&token="
    const response = await FinnhubApi.get( extendedUrl + key)
    return response
}