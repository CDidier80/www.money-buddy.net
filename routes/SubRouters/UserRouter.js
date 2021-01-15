
const Router = require('express').Router()
const controller = require('../../controllers/UserController')

const { 
    getToken, 
    verifyToken 
} = require('../../auth')

const { 
    CreateUser, 
    ReadUser, 
    UpdatePassword, 
    UpdateEmail, 
    DeleteUser, 
    LogInUser, 
    RefreshSession 
} = controller

console.log("USER ROUTER CONNECTED")


Router.post('/create',       CreateUser)
Router.post('/login',        LogInUser)
Router.put('/password',      UpdatePassword)
Router.put('/email',         UpdateEmail)
Router.get('/read/:user_id', ReadUser)
Router.delete('/delete',     DeleteUser)


// check session
Router.get(
        '/session', 
        getToken, 
        verifyToken, 
        RefreshSession
    )

module.exports = Router
