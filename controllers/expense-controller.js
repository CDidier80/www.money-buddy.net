const { Expense } = require('../models')
const { ControllerLoggers } = require('./logs')
const log = ControllerLoggers.ExpenseControllerLog 
const errorLog = ControllerLoggers.ExpenseControllerErrorLog



/**
 * @param {Object} req.body - The expense object.
 * @param {String} req.body.expense - The name of the expense.
 * @param {Integer} req.body.amount - The name of the expense.
 * @param {Integer} req.body.categoryId - The id of the budget that has the category.
 */

const CreateExpense = async (req, res) => {
    log(CreateExpense, req)
    try {
        const expense = await Expense.create(req.body)
        res.send(expense)
    } catch (error) {
        errorLog(CreateExpense, error) 
    }
}


const CreateManyExpenses = async (req, res) => {
    log(CreateManyExpenses, req)
    try {
        const { categoryId, expenses } = req.body
        const newExpenses = expenses.map( async (expense) => {
            const expenseToCreate = {
                categoryId, 
                expense: expense, 
                amount: expense.amount
            }
            const newExpense = await Expense.create(expenseToCreate)
            return newExpense
        })
        return newExpenses
    } catch (error) {
        errorLog(CreateManyExpenses, error) 
    }
}


const GetOneExpense = async (req, res) => {
    log(GetOneExpense, req)
    try {
        const { expenseId } = req.body
        const expense = await Expense.findOne({
            where: {
                id: expenseId
            }
        })
        res.send(expense)
    } catch (error) {
        errorLog(GetOneExpense, error) 
    }
}


const ReadBudgetExpenses = async (req, res) => {
    log(ReadBudgetExpenses, req)
    try {
        const { categoryId } = req.body
        const expenses = await Expense.findAll({
            where: {
                category_id: categoryId
            }
        })
        res.send(expenses)
    } catch (error) {
        errorLog(ReadBudgetExpenses, error) 
    }
}


module.exports = {
    CreateExpense,
    GetOneExpense,
    ReadBudgetExpenses,
    CreateManyExpenses
}