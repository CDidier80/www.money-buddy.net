import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.IncomeServiceLog
const errorLog = ServiceLoggers.IncomeServiceErrorLog


export const CreateIncome = async (body, params) =>  {
    try {
        log(CreateIncome, body, params)
        const response = await ApiClient.post(`incomes/create`, body)
        return response.data
    } catch (error) {
        errorLog(CreateIncome, error)
    }
}


export const GetOneIncome = async (body,  params) =>  {
    try {
        log(GetOneIncome, body, params)
        const response = await ApiClient.get(`incomes/getone`, body)
        return response.data
    } catch (error) {
        errorLog.log(GetOneIncome, error)
    }
}


export const ReadBudgetIncomes = async (body,  params) =>  {
    try {
        log(ReadBudgetIncomes, body, params)
        const response = await ApiClient.get(`incomes/budgetincomes`, body)
        return response.data
    } catch (error) {
        errorLog.log(ReadBudgetIncomes, error)
    }
}

