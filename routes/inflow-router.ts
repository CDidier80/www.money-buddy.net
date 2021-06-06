const Router = require('express').Router()
const { 
    CreateInflow,
    GetOneInflow,
    GetAllInflows,
    CreateManyInflows
} = require('../../../controllers/CashflowControllers/InflowController')

Router.get('/getone',      GetOneInflow)
Router.get('/getmany',     GetAllInflows)
Router.post('/create',     CreateInflow)
Router.post('/createmany', CreateManyInflows)

export default Router
