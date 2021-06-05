import { Service } from "./types"
import ApiClient from "./ApiClient"
import { AxiosResponse } from 'axios'
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.IncomeApiLog
const errorLog = ServiceLoggers.IncomeApiLog


export const CreateIncome: Service = async (body, params) => {
    try {
        log(CreateIncome, body, params)
        const response: AxiosResponse<any> = await ApiClient.post(`incomes/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateIncome, error)
    }
}


export const GetOneIncome: Service = async (body,  params) => {
    try {
        log(GetOneIncome, body, params)
        const response: AxiosResponse<any> = await ApiClient.get(`incomes/getone`, body)
        return response.data
    } catch (error) {
        errorLog.log(GetOneIncome, error)
    }
}


export const ReadBudgetIncomes: Service = async (body,  params) => {
    try {
        log(ReadBudgetIncomes, body, params)
        const response: AxiosResponse<any> = await ApiClient.get(`incomes/budgetincomes`, body)
        return response.data
    } catch (error) {
        errorLog.log(ReadBudgetIncomes, error)
    }
}

