const Router = require('express').Router()
const { 
    CreateExpense, 
    GetOneExpense, 
    ReadBudgetExpenses 
} = require('../controllers/expense-controller')

Router.get('/getone', GetOneExpense)
Router.get('/budgetexpenses', ReadBudgetExpenses)
Router.post('/create', CreateExpense)

module.exports = Router
