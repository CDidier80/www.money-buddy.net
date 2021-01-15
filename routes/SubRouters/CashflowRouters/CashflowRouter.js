const Router = require('express').Router()
const controller = require('../../../controllers/CashflowControllers/CashflowController')
const { 
    ReadEntireCashflow, 
    UpdateEntireCashflow,
    CreateCashflow,
    GetOneCashflow,
    CreateDefaultCashflow
} = controller

console.log("CASHFLOW ROUTER CONNECTED")

Router.post('/create',      CreateCashflow)
Router.get('/getone',       GetOneCashflow)
Router.post('/entire',      ReadEntireCashflow)
Router.put('/update',       UpdateEntireCashflow)
Router.post('/initaccount', CreateDefaultCashflow)

module.exports = Router
