const controller = require('../../../controllers/CashflowControllers/CashflowController')
const Router = require('express').Router()
const { 
    CreateCashflow,
    GetOneCashflow,
    ReadEntireCashflow, 
    UpdateEntireCashflow,
    CreateDefaultCashflow,
} = controller

Router.post('/create',      CreateCashflow)
Router.get('/getone',       GetOneCashflow)
Router.post('/entire',      ReadEntireCashflow)
Router.put('/update',       UpdateEntireCashflow)
Router.post('/initaccount', CreateDefaultCashflow)

module.exports = Router
