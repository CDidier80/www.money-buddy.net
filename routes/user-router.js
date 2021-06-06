const Router = require('express').Router()
const { 
    UpdatePassword, 
    RefreshSession, 
    UpdateEmail, 
    DeleteUser, 
    CreateUser, 
    LogInUser, 
    ReadUser 
} = require('../controllers/user-controller')

Router.get('/read/:user_id', ReadUser)
Router.get('/session', RefreshSession )
Router.post('/login', LogInUser)
Router.post('/create', CreateUser)
Router.put('/email', UpdateEmail)
Router.put('/password', UpdatePassword)
Router.delete('/delete', DeleteUser)

module.exports = Router


