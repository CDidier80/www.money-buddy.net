const Router = require('express').Router()
const controller = require('../../../controllers/CashflowControllers/MonthController')
const { 
    CreateMonth, 
    GetMonth, 
    GetMonths 
} = controller

console.log("MONTH ROUTER CONNECTED")

Router.post('/create', CreateMonth)
Router.get('/getone',  GetMonth)
Router.get('/getmany', GetMonths)


module.exports = Router
