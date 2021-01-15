const Router = require('express').Router()
const controller = require('../../../controllers/BudgetControllers/IncomeController')
const { 
    CreateIncome, 
    GetOneIncome, 
    ReadBudgetIncomes 
} = controller

console.log("INCOME ROUTER CONNECTED")

Router.post('/create',       CreateIncome)
Router.get('/getone',        GetOneIncome)
Router.get('/budgetincomes', ReadBudgetIncomes)

module.exports = Router
