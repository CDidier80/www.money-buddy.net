const Router = require('express').Router()
const controller = require('../../../controllers/BudgetControllers/CategoryController')
const { 
    CreateCategory, 
    ReadBudgetCategories, 
    GetOneCategory, 
    DeleteCategoriesFromBudget, 
    RestoreDefaultCategories,
} = controller


Router.post('/create',                 CreateCategory)
Router.get("/getone",                  GetOneCategory)
Router.get('/budgetcategories',        ReadBudgetCategories)
Router.post('/restoredefaults',        RestoreDefaultCategories)
Router.delete('/deletemanyfrombudget', DeleteCategoriesFromBudget)

module.exports = Router
