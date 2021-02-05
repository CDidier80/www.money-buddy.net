import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.CategoryServiceLog
const errorLog = ServiceLoggers.CategoryServiceErrorLog


export const CreateCategory = async (body, params) =>  {
    try {
        log(CreateCategory, body, params)
        const response = await ApiClient.post(`categories/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateCategory, error)
    }
}