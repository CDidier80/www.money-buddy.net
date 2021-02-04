
const Router = require('express').Router()
const controller = require('../../controllers/UserController')

const { 
    UpdatePassword, 
    RefreshSession, 
    UpdateEmail, 
    DeleteUser, 
    CreateUser, 
    LogInUser, 
    ReadUser, 
} = controller

// console.log("USER ROUTER CONNECTED")

Router.put('/password',      UpdatePassword)
Router.put('/email',         UpdateEmail)
Router.get('/read/:user_id', ReadUser)
Router.post('/create',       CreateUser)
Router.post('/login',        LogInUser)
Router.delete('/delete',     DeleteUser)

// check session
Router.get( '/session', RefreshSession )

module.exports = Router


