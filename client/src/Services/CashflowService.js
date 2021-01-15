import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.CashflowServiceLog
const errorLog = ServiceLoggers.CashflowServiceErrorLog

export const ReadEntireCashflow = async (body,  params) =>  {
    try {
        log(ReadEntireCashflow, body, params)
        const response = await ApiClient.post(`cashflow/entirecashflow`, body)
        return response.data
    } catch (error) {
        errorLog(ReadEntireCashflow, error)
    }
}

export const UpdateEntireCashflow = async (body,  params) =>  {
    try {
        log(UpdateEntireCashflow, body, params)
        const response = await ApiClient.put(`cashflow/update`, body)
        console.log(response.data)
        return response.data
    } catch (error) {
        errorLog(UpdateEntireCashflow, error)
    }
}