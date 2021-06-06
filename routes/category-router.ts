const Router = require('express').Router()
const { 
    CreateCategory, 
    GetOneCategory, 
    ReadBudgetCategories,
    RestoreDefaultCategories,
    DeleteCategoriesFromBudget
} = require('../../../controllers/BudgetControllers/CategoryController')


Router.get("/getone", GetOneCategory)
Router.get('/budgetcategories', ReadBudgetCategories)
Router.post('/create', CreateCategory)
Router.post('/restoredefaults', RestoreDefaultCategories)
Router.delete('/deletemanyfrombudget', DeleteCategoriesFromBudget)

export default Router
