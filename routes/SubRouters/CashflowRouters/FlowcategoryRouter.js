const Router = require('express').Router()
const { 
    CreateFlowcategory,
    GetFlowcategory,
    GetFlowcategories,
    // CreateManyFlowcategories
} = require('../../../controllers/CashflowControllers/FlowcategoryController')

Router.post('/create',     CreateFlowcategory)
Router.get('/getone',      GetFlowcategory)
Router.get('/getmany',     GetFlowcategories)
// Router.post('/createmany', CreateManyFlowcategories)

module.exports = Router
