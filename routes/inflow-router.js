const Router = require('express').Router()
const { 
    CreateInflow,
    GetOneInflow,
    GetAllInflows,
    CreateManyInflows
} = require('../controllers/inflow-controller')

Router.get('/getone', GetOneInflow)
Router.get('/getmany', GetAllInflows)
Router.post('/create', CreateInflow)
Router.post('/createmany', CreateManyInflows)

module.exports = Router
