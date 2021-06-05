import { Service } from "./types"
import ApiClient from "./ApiClient"
import { AxiosResponse } from "axios"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.ExpenseApiLog
const errorLog = ServiceLoggers.ExpenseApiErrorLog

export const CreateExpense: Service = async (body, params) =>  {
    try {
        log(CreateExpense, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`expenses/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateExpense, error)
    }
}

export const GetOneExpense: Service = async (body,  params) =>  {
    try {
        log(GetOneExpense, body, params)
        const response: AxiosResponse<any> = await ApiClient.get(`expenses/getone`, body)
        return response.data
    } catch (error) {
        errorLog.log(GetOneExpense, error)
    }
}

export const ReadBudgetExpenses: Service = async (body,  params) =>  {
    try {
        log(ReadBudgetExpenses, body, params)
        const response: AxiosResponse<any> = await ApiClient.get(`expenses/budgetexpenses`, body)
        return response.data
    } catch (error) {
        errorLog.log(ReadBudgetExpenses, error)
    }
}