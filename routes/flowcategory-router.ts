const Router = require('express').Router()
const { 
    GetFlowcategory,
    GetFlowcategories,
    CreateFlowcategory,
} = require('../../../controllers/CashflowControllers/FlowcategoryController')

Router.get('/getone',      GetFlowcategory)
Router.get('/getmany',     GetFlowcategories)
Router.post('/create',     CreateFlowcategory)

export default Router
