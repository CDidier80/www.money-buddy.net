const Router = require('express').Router()
const controller = require('../../../controllers/CashflowControllers/MonthController')
const { GetMonth, GetMonths, CreateMonth } = controller

Router.post('/create', CreateMonth)
Router.get('/getmany', GetMonths)
Router.get('/getone',  GetMonth)

module.exports = Router
