const Router = require('express').Router()
const { 
    CreateInflow,
    GetOneInflow,
    GetAllInflows,
    CreateManyInflows
} = require('../../../controllers/CashflowControllers/InflowController')

Router.post('/create',     CreateInflow)
Router.post('/createmany', CreateManyInflows)
Router.get('/getone',      GetOneInflow)
Router.get('/getmany',     GetAllInflows)

module.exports = Router
