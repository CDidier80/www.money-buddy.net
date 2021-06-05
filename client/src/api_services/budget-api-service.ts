import { Service } from "./types"
import ApiClient from "./ApiClient"
import { AxiosResponse } from "axios"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.BudgetApiLog
const errorLog = ServiceLoggers.BudgetServiceErrorLog

export const CreateBudget: Service = async (body, params) => {
    try {
        log(CreateBudget, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`budgets/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateBudget, error)
    }
}

export const ReadBudget: Service = async (body,  params) => {
    try {
        log(ReadBudget, body, params)
        const response: AxiosResponse<any> = await ApiClient.get(`budgets/getone`, body)
        return response.data
    } catch (error) {
        errorLog(ReadBudget, error)
    }
}

export const ReadEntireBudget: Service = async (body,  params) => {
    try {
        log(ReadEntireBudget, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`budgets/entirebudget`, body)
        return response.data
    } catch (error) {
        errorLog(ReadEntireBudget, error)
    }
}

export const UpdateEntireBudget: Service = async (body,  params) => {
    try {
        log(UpdateEntireBudget, body, params)
        const response: AxiosResponse<any> = await ApiClient.put(`budgets/update`, body)
        return response.data
    } catch (error) {
        errorLog(UpdateEntireBudget, error)
    }
}