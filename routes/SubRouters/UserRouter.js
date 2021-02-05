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


Router.get('/read/:user_id',  ReadUser)
Router.post('/login',         LogInUser)
Router.delete('/delete',      DeleteUser)
Router.post('/create',        CreateUser)
Router.put('/email',          UpdateEmail)
Router.put('/password',       UpdatePassword)
Router.get( '/session',       RefreshSession )

module.exports = Router


