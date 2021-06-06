const Router = require('express').Router()
const { GetMonth, GetMonths, CreateMonth } = require('../controllers/month-controller')

Router.get('/getone',  GetMonth)
Router.get('/getmany', GetMonths)
Router.post('/create', CreateMonth)

module.exports = Router
