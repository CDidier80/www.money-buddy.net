const Router = require('express').Router()
const { 
    CreateOutflow,
    GetOneOutflow,
    GetAllOutflows,
    CreateManyOutflows,
} = require('../../../controllers/CashflowControllers/OutflowController')

Router.get('/getone', GetOneOutflow)
Router.get('/getmany', GetAllOutflows)
Router.post('/create', CreateOutflow)
Router.post('/createmany', CreateManyOutflows)

export default Router
