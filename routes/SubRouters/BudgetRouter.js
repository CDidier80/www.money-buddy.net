const Router = require('express').Router()
const controller = require('../../controllers/BudgetController')
const { CreateBudget, GetOneBudget, ReadEntireBudget, UpdateEntireBudget } = controller

console.log("BUDGET ROUTER CONNECTED")

Router.post('/create', CreateBudget)

Router.get('/getone', GetOneBudget)
Router.post('/entirebudget', ReadEntireBudget)
Router.put('/update', UpdateEntireBudget)

module.exports = Router
