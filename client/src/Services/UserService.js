import ApiClient from "./ApiClient"
const { ServiceLoggers } = require('./logs')
const log = ServiceLoggers.UserServiceLog
const errorLog = ServiceLoggers.UserServiceErrorLog

export const CreateUser = async (body, params) =>  {
    try {
        log(CreateUser, body, params)
        const response = await ApiClient.post(`users/create`, body)
        return response
    } catch (error) {
        errorLog(CreateUser, error)
    }
}

export const LogInUser = async (body, params) =>  {
    try {
        log(LogInUser, body, params)
        const response = await ApiClient.post(`users/login`, body)
        localStorage.setItem('token', response.data.token)
        return response
    } catch (error) {
        errorLog(LogInUser,error)
    }
}

export const ReadUser = async (body,  params) =>  {
    try {
        log(ReadUser, body, params)
        const response = await ApiClient.get(`users/update${params}`, body)
        return response.data
    } catch (error) {
        errorLog.log(ReadUser, error)
    }
}

export const UpdatePassword= async (body, params) =>  {
    try {
        log(UpdatePassword, body, params)
        const response = await ApiClient.put(`users/password`, body)
        return response
    } catch (error) {
        errorLog.log(UpdatePassword, error)
    }
}

export const UpdateEmail = async (body, params) =>  {
    try {
        log(UpdateEmail, body, params)
        const response = await ApiClient.put(`users/email`, body)
        return response
    } catch (error) {
        errorLog.log(UpdateEmail, error)
    }
}

export const DeleteUser = async (body, params) => {
    try {
        log(DeleteUser, body, params)
        const response = await ApiClient.delete(`users/delete/${body}`)
        return response.data
    } catch (error) {
        errorLog.log(DeleteUser,error)
    }
}

export const CheckSessionService = async (body, params) => {
    try{
        log(CheckSessionService, body, params)
        const res = await ApiClient.get('users/session')
        return res.data
    } catch (error) {
        errorLog.log(CheckSessionService, error)
    }
}

// module.exports = {
//     LogInUser, 
//     CreateUser, 
//     ReadUser, 
//     UpdateUser,
//     DeleteUser, 
//     CheckSessionService
// }

