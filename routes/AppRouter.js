const Router = require('express').Router()
const UserRouter = require('./SubRouters/UserRouter')
const BudgetRouter = require( './SubRouters/BudgetRouter')
const IncomeRouter = require( './SubRouters/IncomeRouter')
const CategoryRouter = require( './SubRouters/CategoryRouter')
const ExpenseRouter = require( './SubRouters/ExpenseRouter')

console.log("APP ROUTER CONNECTED")

Router.use('/users', UserRouter)
Router.use('/budgets', BudgetRouter)
Router.use('/incomes', IncomeRouter)
Router.use('/categories', CategoryRouter)
Router.use('/expenses', ExpenseRouter)

module.exports = Router