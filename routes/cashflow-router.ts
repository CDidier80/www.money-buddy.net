const Router = require('express').Router()
const { 
    CreateCashflow,
    GetOneCashflow,
    ReadEntireCashflow, 
    UpdateEntireCashflow,
    CreateDefaultCashflow,
} = require('../../../controllers/CashflowControllers/CashflowController')

Router.get('/getone', GetOneCashflow)
Router.post('/create', CreateCashflow)
Router.post('/entire', ReadEntireCashflow)
Router.post('/initaccount', CreateDefaultCashflow)
Router.put('/update', UpdateEntireCashflow)

export default Router
