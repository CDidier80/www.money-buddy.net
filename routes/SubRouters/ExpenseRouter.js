const Router = require('express').Router()
const controller = require('../../controllers/ExpenseController')
const { CreateExpense, GetOneExpense, ReadBudgetExpenses } = controller

console.log("EXPENSE ROUTER CONNECTED")

Router.post('/create', CreateExpense)

Router.get('/getone', GetOneExpense)
Router.get('/budgetexpenses', ReadBudgetExpenses)

module.exports = Router
