const incomeController = require('./IncomeController')
const { ControllerLoggers } = require('../logs')
const { CreateManyIncomes } = incomeController
const log = ControllerLoggers.BudgetControllerLog 
const errorLog = ControllerLoggers.BudgetControllerErrorLog
const { 
    Budget, 
    Income, 
    Category, 
    Expense 
} = require('../../models')


const CreateBudget = async (req, res) => {
    log(CreateBudget, req)
    try {
        console.log('Begin creating budget. Wait for confirmation...')
        const budget = await Budget.create(req.body)
        console.log("Budget.create(req.body) returned a budget")
        res.send(budget)
    } catch (error) {
        errorLog(CreateBudget, error) 
    }
}


const GetOneBudget = async (req, res) => {
    log(GetOneBudget, req)
    try {
        const { userId } = req.body
        console.log("Finding user's budget. Wait for confirmation...")
        const budget = await Budget.findOne({
            where: {
                user_id: userId
            }
        })
        console.log("Budget found.")
        res.send(budget)
    } catch (error) {
        errorLog(GetOneBudget, error) 
    }
}


const ReadEntireBudget = async (req, res) => {
    log(ReadEntireBudget, req)
    try {
        console.log('Searching request body payload for userId')
        const { userId } = req.body
        userId && console.log("Found userId.")
        console.log("Finding user's budget. Await confirmation...")
        const budget = await Budget.findOne({
            where: {
                user_id: userId
            }, 
        })
        console.log("Budget found.")

        const { id: budgetId } = budget
        console.log("Finding incomes. Await confirmation...")

        const incomes = await Income.findAll({
            where: {
                budget_id: budgetId
            },
            attributes: [ "id", "source", "amount" ]
        })
        console.log("Incomes found.")
        console.log("Searching for categories. Await confirmation...")

        let categories = await Category.findAll({
            raw: true,
            where: { 
                budget_id: budgetId 
            }, 
            attributes: [ "id", "name" ]
        })
        console.log("Categories found.")
        console.log("Searching for expenses. Await confirmation...")

        for (let i = 0; i<=categories.length -1; i++) {
            const { id: categoryId  } = categories[i]
            const expenses = await Expense.findAll({
                where: {
                    category_id: categoryId
                }, 
                attributes: [ "id", "expense", "amount" ]
            })
            categories[i] = {...categories[i], expenses: expenses}
        }
        console.log("Expenses found.")

        const entireBudget = {
            budgetId,
            incomes,
            categories
        }
        console.log("sending entire budget to client.")
        res.send(entireBudget)
    } catch (error) {
        errorLog(ReadEntireBudget, error)
    }
}


const UpdateEntireBudget = async (req, res) => {

    log(UpdateEntireBudget, req)
    try {
        const { budgetId, incomes, categories } = req.body

        Income.destroy({
            where: { 
                budget_id: budgetId 
            }
        })
        
        Category.destroy({
            where: { 
                budget_id: budgetId 
            }
        })
        console.log("original incomes and categories destroyed. Creating new.")
        const newIncomes = await Promise.all(incomes.map(async (income) => {
            const incomeToCreate = {
                budgetId, 
                source: income.source, 
                amount: income.amount
            }
            const newIncome = await Income.create(incomeToCreate)
            return newIncome
        }))

        const newCategoriesWithExpenses = await Promise.all(categories.map(async (category) => {
            const { name, expenses } = category
            const newCategory = await Category.create({ name:name, budgetId })
            const { id: newCategoryId} = newCategory
            const newExpenses = await Promise.all(expenses.map( async (expense) => {
                const expenseToCreate = {
                    categoryId: newCategoryId,
                    expense: expense.expense, 
                    amount: expense.amount
                }
                const newExpense = await Expense.create(expenseToCreate)
                return newExpense
            }))
            return { categoryId: newCategoryId, name, expenses: [...newExpenses] }
        }))

        const entireBudget = {
            budgetId : budgetId,
            incomes: [...newIncomes],
            categories: [...newCategoriesWithExpenses]
        }

        res.send(entireBudget)
    } catch (error) {
        errorLog(UpdateEntireBudget, error)
    }
}

module.exports = {
    CreateBudget,
    GetOneBudget,
    ReadEntireBudget,
    UpdateEntireBudget
}
