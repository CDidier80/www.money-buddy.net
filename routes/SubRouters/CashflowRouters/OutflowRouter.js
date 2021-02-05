const Router = require('express').Router()
const { 
    CreateOutflow,
    GetOneOutflow,
    GetAllOutflows,
    CreateManyOutflows,
} = require('../../../controllers/CashflowControllers/OutflowController')

Router.post('/create',     CreateOutflow)
Router.get('/getone',      GetOneOutflow)
Router.get('/getmany',     GetAllOutflows)
Router.post('/createmany', CreateManyOutflows)

module.exports = Router
