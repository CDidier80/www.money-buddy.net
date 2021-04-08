import { Service } from "./types"
import ApiClient from "./ApiClient"
import { AxiosResponse } from "axios"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.CashflowServiceLog
const errorLog = ServiceLoggers.CashflowServiceErrorLog


export const ReadEntireCashflow: Service = async (body,  params) =>  {
    try {
        log(ReadEntireCashflow, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`cashflows/entire`, body)
        return response.data
    } catch (error) {
        errorLog(ReadEntireCashflow, error)
    }
}


export const UpdateEntireCashflow: Service = async (body,  params) =>  {
    try {
        log(UpdateEntireCashflow, body, params)
        const response: AxiosResponse<any> = await ApiClient.put(`cashflows/update`, body)
        return response.data
    } catch (error) {
        errorLog(UpdateEntireCashflow, error)
    }
}


export const CreateEntireCashflow: Service = async (body,  params) =>  {
    try {
        log(CreateEntireCashflow, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`cashflows/initaccount`, body)
        return response.data
    } catch (error) {
        errorLog(CreateEntireCashflow, error)
    }
}