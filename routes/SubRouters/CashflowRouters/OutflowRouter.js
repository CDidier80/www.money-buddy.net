const Router = require('express').Router()
const { 
    CreateOutflow,
    GetOneOutflow,
    GetAllOutflows,
    CreateManyOutflows,
} = require('../../../controllers/CashflowControllers/OutflowController')

Router.post('/create',     CreateOutflow)
Router.post('/createmany', CreateManyOutflows)
Router.get('/getone',      GetOneOutflow)
Router.get('/getmany',     GetAllOutflows)

module.exports = Router
