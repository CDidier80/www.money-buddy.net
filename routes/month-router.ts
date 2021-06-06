const Router = require('express').Router()
const { GetMonth, GetMonths, CreateMonth } = require('../../../controllers/CashflowControllers/MonthController')

Router.get('/getone',  GetMonth)
Router.get('/getmany', GetMonths)
Router.post('/create', CreateMonth)

export default Router
