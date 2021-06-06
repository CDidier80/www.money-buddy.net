const Router = require('express').Router()
const { 
    CreateExpense, 
    GetOneExpense, 
    ReadBudgetExpenses 
} = require('../../../controllers/BudgetControllers/ExpenseController')

Router.get('/getone', GetOneExpense)
Router.get('/budgetexpenses', ReadBudgetExpenses)
Router.post('/create', CreateExpense)

export default Router
