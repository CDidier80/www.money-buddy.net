import { Service } from "./types"
import ApiClient from "./ApiClient"
import { AxiosResponse } from "axios"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.CategoryServiceLog
const errorLog = ServiceLoggers.CategoryServiceErrorLog

export const CreateCategory: Service = async (body, params) =>  {
    try {
        log(CreateCategory, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`categories/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateCategory, error)
    }
}