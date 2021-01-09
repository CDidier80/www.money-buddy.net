import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.ExpenseServiceLog
const errorLog = ServiceLoggers.ExpenseServiceErrorLog

export const CreateExpense = async (body, params) =>  {
    try {
        log(CreateExpense, body, params)
        const response = await ApiClient.post(`expenses/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateExpense, error)
    }
}

export const GetOneExpense = async (body,  params) =>  {
    try {
        log(GetOneExpense, body, params)
        const response = await ApiClient.get(`expenses/getone`, body)
        return response.data
    } catch (error) {
        errorLog.log(GetOneExpense, error)
    }
}
export const ReadBudgetExpenses = async (body,  params) =>  {
    try {
        log(ReadBudgetExpenses, body, params)
        const response = await ApiClient.get(`expenses/budgetexpenses`, body)
        return response.data
    } catch (error) {
        errorLog.log(ReadBudgetExpenses, error)
    }
}