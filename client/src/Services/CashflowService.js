import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.CashflowServiceLog
const errorLog = ServiceLoggers.CashflowServiceErrorLog

export const ReadEntireCashflow = async (body,  params) =>  {
    try {
        log(ReadEntireCashflow, body, params)
        const response = await ApiClient.post(`cashflows/entirecashflow`, body)
        return response.data
    } catch (error) {
        errorLog(ReadEntireCashflow, error)
    }
}

export const UpdateEntireCashflow = async (body,  params) =>  {
    try {
        log(UpdateEntireCashflow, body, params)
        const response = await ApiClient.put(`cashflows/update`, body)
        console.log(response.data)
        return response.data
    } catch (error) {
        errorLog(UpdateEntireCashflow, error)
    }
}

export const CreateEntireCashflow = async (body,  params) =>  {
    try {
        log(CreateEntireCashflow, body, params)
        const response = await ApiClient.post(`cashflows/initaccount`, body)
        console.log("response.data", response.data)
        return response.data
    } catch (error) {
        errorLog(CreateEntireCashflow, error)
    }
}