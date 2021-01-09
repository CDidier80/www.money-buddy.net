const Router = require('express').Router()
const controller = require('../../controllers/CategoryController')
const { 
    CreateCategory, 
    ReadBudgetCategories, 
    GetOneCategory, 
    DeleteCategoriesFromBudget, 
    RestoreDefaultCategories,
} = controller

console.log("CATEGORY ROUTER CONNECTED")

Router.post('/create', CreateCategory)
Router.post('/restoredefaults', RestoreDefaultCategories)

Router.get("/getone", GetOneCategory)
Router.get('/budgetcategories', ReadBudgetCategories)
Router.delete('/deletemanyfrombudget', DeleteCategoriesFromBudget)

module.exports = Router
