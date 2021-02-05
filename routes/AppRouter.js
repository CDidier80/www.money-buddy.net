const Router     = require('express').Router()
const UserRouter = require('./SubRouters/UserRouter')

/* Budget Routers */
const BudgetRouter   = require('./SubRouters/BudgetRouters/BudgetRouter')
const IncomeRouter   = require('./SubRouters/BudgetRouters/IncomeRouter')
const ExpenseRouter  = require('./SubRouters/BudgetRouters/ExpenseRouter')
const CategoryRouter = require('./SubRouters/BudgetRouters/CategoryRouter')

/* Cashflow Routers */
const MonthRouter        = require('./SubRouters/CashflowRouters/MonthRouter')
const InflowRouter       = require('./SubRouters/CashflowRouters/InflowRouter')
const OutflowRouter      = require('./SubRouters/CashflowRouters/OutflowRouter')
const CashflowRouter     = require('./SubRouters/CashflowRouters/CashflowRouter')
const FlowcategoryRouter = require('./SubRouters/CashflowRouters/FlowcategoryRouter')

Router.use('/users', UserRouter)

/* Use Budget Routers */
Router.use('/budgets',    BudgetRouter)
Router.use('/incomes',    IncomeRouter)
Router.use('/expenses',   ExpenseRouter)
Router.use('/categories', CategoryRouter)

/* Use Cashflow Routers */
Router.use('/months',         MonthRouter)
Router.use('/inflows',        InflowRouter)
Router.use('/outflows',       OutflowRouter)
Router.use('/cashflows',      CashflowRouter)
Router.use('/flowcategories', FlowcategoryRouter)

module.exports = Router