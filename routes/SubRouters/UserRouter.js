
const Router = require('express').Router()
const controller = require('../../controllers/UserController')
const { CreateUser, ReadUser, UpdatePassword, UpdateEmail, DeleteUser, LogInUser, RefreshSession } = controller
const { getToken, verifyToken } = require('../../auth')
console.log("USER ROUTER CONNECTED")


Router.post('/create', CreateUser)
Router.post('/login', LogInUser)

Router.put('/password', UpdatePassword)
Router.put('/email', UpdateEmail)


// Read
Router.get('/read/:user_id', ReadUser)

// Update


// Delete
// cascade will delete all associated projects and the user's profile
Router.delete('/delete/:user_id', DeleteUser)


// check session
Router.get('/session', getToken, verifyToken, RefreshSession)

module.exports = Router
