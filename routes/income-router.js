const Router = require('express').Router()
const { 
    CreateIncome, 
    GetOneIncome, 
    ReadBudgetIncomes 
} = require('../controllers/income-controller')

Router.get('/budgetincomes', ReadBudgetIncomes)
Router.get('/getone', GetOneIncome)
Router.post('/create', CreateIncome)

module.exports = Router
