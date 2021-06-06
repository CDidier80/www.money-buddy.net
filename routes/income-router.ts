const Router = require('express').Router()
const { 
    CreateIncome, 
    GetOneIncome, 
    ReadBudgetIncomes 
} = require('../../../controllers/BudgetControllers/IncomeController')

Router.get('/budgetincomes', ReadBudgetIncomes)
Router.get('/getone',        GetOneIncome)
Router.post('/create',       CreateIncome)

export default Router
