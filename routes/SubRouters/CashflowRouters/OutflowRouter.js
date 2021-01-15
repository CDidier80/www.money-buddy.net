const Router = require('express').Router()
const { 
    CreateOutflow,
    CreateManyOutflows,
    GetOneOutflow,
    GetAllOutflows
} = require('../../../controllers/CashflowControllers/OutflowController')

console.log("OUTFLOW ROUTER CONNECTED")

Router.post('/create',     CreateOutflow)
Router.post('/createmany', CreateManyOutflows)
Router.get('/getone',      GetOneOutflow)
Router.get('/getmany',     GetAllOutflows)

module.exports = Router
