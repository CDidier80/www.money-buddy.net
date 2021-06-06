const Router = require('express').Router()
const { 
    UpdateEntireBudget,
    ReadEntireBudget,
    CreateBudget,
    GetOneBudget
} = require('../../../controllers/BudgetControllers/BudgetController')

Router.get('/get', GetOneBudget)
Router.post('/create', CreateBudget)
Router.post('/entirebudget', ReadEntireBudget)
Router.put('/update', UpdateEntireBudget)

export default Router
