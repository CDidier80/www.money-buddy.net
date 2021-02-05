const Router = require('express').Router()
const { 
    CreateInflow,
    GetOneInflow,
    GetAllInflows,
    CreateManyInflows
} = require('../../../controllers/CashflowControllers/InflowController')

Router.post('/create',     CreateInflow)
Router.get('/getone',      GetOneInflow)
Router.get('/getmany',     GetAllInflows)
Router.post('/createmany', CreateManyInflows)

module.exports = Router
