const Router = require('express').Router()

const UserRouter = require('./user-router')

/* Budget and associated Routers */
const BudgetRouter = require('./budget-router')
const IncomeRouter = require('./income-router')
const ExpenseRouter = require('./expense-router')
const CategoryRouter = require('./category-router')

/* Cashflow and associated Routers */
const MonthRouter = require('./month-router')
const InflowRouter = require('./inflow-router')
const OutflowRouter = require('./outflow-router')
const CashflowRouter = require('./cashflow-router')
const FlowcategoryRouter = require('./flowcategory-router')

Router.use('/users', UserRouter)

Router.use('/budget', BudgetRouter)
Router.use('/incomes', IncomeRouter)
Router.use('/expenses', ExpenseRouter)
Router.use('/categories', CategoryRouter)

Router.use('/months', MonthRouter)
Router.use('/inflows', InflowRouter)
Router.use('/outflows', OutflowRouter)
Router.use('/cashflows', CashflowRouter)
Router.use('/flowcategories', FlowcategoryRouter)

module.exports = Router