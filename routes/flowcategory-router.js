const Router = require('express').Router()
const { 
    GetFlowcategory,
    GetFlowcategories,
    CreateFlowcategory,
} = require('../controllers/flowcategory-controller')

Router.get('/getone', GetFlowcategory)
Router.get('/getmany', GetFlowcategories)
Router.post('/create', CreateFlowcategory)

module.exports = Router
