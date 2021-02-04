import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.BudgetServiceLog
const errorLog = ServiceLoggers.BudgetServiceErrorLog

export const CreateBudget = async (body, params) =>  {
    try {
        log(CreateBudget, body, params)
        const response = await ApiClient.post(`budgets/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateBudget, error)
    }
}

export const ReadBudget = async (body,  params) =>  {
    try {
        log(ReadBudget, body, params)
        const response = await ApiClient.get(`budgets/getone`, body)
        return response.data
    } catch (error) {
        errorLog(ReadBudget, error)
    }
}

export const ReadEntireBudget = async (body,  params) =>  {
    try {
        log(ReadEntireBudget, body, params)
        const response = await ApiClient.post(`budgets/entirebudget`, body)
        return response.data
    } catch (error) {
        errorLog(ReadEntireBudget, error)
    }
}

export const UpdateEntireBudget = async (body,  params) =>  {
    try {
        log(UpdateEntireBudget, body, params)
        const response = await ApiClient.put(`budgets/update`, body)
        return response.data
    } catch (error) {
        errorLog(UpdateEntireBudget, error)
    }
}