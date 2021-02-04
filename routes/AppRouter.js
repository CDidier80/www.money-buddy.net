const Router     = require('express').Router()
const UserRouter = require('./SubRouters/UserRouter')

/* Budget Routers */
const BudgetRouter   = require('./SubRouters/BudgetRouters/BudgetRouter')
const IncomeRouter   = require('./SubRouters/BudgetRouters/IncomeRouter')
const CategoryRouter = require('./SubRouters/BudgetRouters/CategoryRouter')
const ExpenseRouter  = require('./SubRouters/BudgetRouters/ExpenseRouter')

/* Cashflow Routers */
const CashflowRouter     = require('./SubRouters/CashflowRouters/CashflowRouter')
const MonthRouter        = require('./SubRouters/CashflowRouters/MonthRouter')
const InflowRouter       = require('./SubRouters/CashflowRouters/InflowRouter')
const OutflowRouter      = require('./SubRouters/CashflowRouters/OutflowRouter')
const FlowcategoryRouter = require('./SubRouters/CashflowRouters/FlowcategoryRouter')


// console.log("APP ROUTER CONNECTED")


Router.use('/users', UserRouter)

/* Use Budget Routers */
Router.use('/budgets',    BudgetRouter)
Router.use('/incomes',    IncomeRouter)
Router.use('/categories', CategoryRouter)
Router.use('/expenses',   ExpenseRouter)

/* Use Cashflow Routers */
Router.use('/cashflows',      CashflowRouter)
Router.use('/months',         MonthRouter)
Router.use('/inflows',        InflowRouter)
Router.use('/outflows',       OutflowRouter)
Router.use('/flowcategories', FlowcategoryRouter)

module.exports = Router