const Router = require('express').Router()
const controller = require('../../../controllers/CashflowControllers/MonthController')
const { GetMonth, GetMonths, CreateMonth } = controller

Router.post('/create', CreateMonth)
Router.get('/getone',  GetMonth)
Router.get('/getmany', GetMonths)

module.exports = Router
