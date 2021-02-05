const controller = require('../../../controllers/BudgetControllers/BudgetController')
const Router = require('express').Router()
const { 
    CreateBudget, 
    GetOneBudget, 
    ReadEntireBudget, 
    UpdateEntireBudget 
} = controller

Router.post('/create',       CreateBudget)
Router.get('/getone',        GetOneBudget)
Router.post('/entirebudget', ReadEntireBudget)
Router.put('/update',        UpdateEntireBudget)

module.exports = Router
