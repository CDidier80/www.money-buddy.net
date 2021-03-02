const Router = require('express').Router()
const controller = require('../../../controllers/BudgetControllers/ExpenseController')
const { 
    CreateExpense, 
    GetOneExpense, 
    ReadBudgetExpenses 
} = controller

Router.post('/create',        CreateExpense)
Router.get('/getone',         GetOneExpense)
Router.get('/budgetexpenses', ReadBudgetExpenses)

module.exports = Router
