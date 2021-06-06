const Router = require('express').Router()

const UserRouter = require('./UserRouter')

/* Budget and associated Routers */
const BudgetRouter = require('./BudgetRouter')
const IncomeRouter = require('./IncomeRouter')
const ExpenseRouter = require('./ExpenseRouter')
const CategoryRouter = require('./CategoryRouter')

/* Cashflow and associated Routers */
const MonthRouter = require('./MonthRouter')
const InflowRouter = require('./InflowRouter')
const OutflowRouter = require('./OutflowRouter')
const CashflowRouter = require('./CashflowRouter')
const FlowcategoryRouter = require('./FlowcategoryRouter')

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

export default Router
