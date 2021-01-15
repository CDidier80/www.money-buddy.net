const Router = require('express').Router()
const { 
    CreateFlowcategory,
    GetFlowcategory,
    GetFlowcategories,
    // CreateManyFlowcategories
} = require('../../../controllers/CashflowControllers/FlowcategoryController')

console.log("FLOWCATEGORY ROUTER CONNECTED")

Router.post('/create',     CreateFlowcategory)
// Router.post('/createmany', CreateManyFlowcategories)
Router.get('/getone',      GetFlowcategory)
Router.get('/getmany',     GetFlowcategories)

module.exports = Router
