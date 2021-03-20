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
        const budget = await Budget.create(req.body)
        res.send(budget)
    } catch (error) {
        errorLog(CreateBudget, error) 
    }
}


const GetOneBudget = async (req, res) => {
    log(GetOneBudget, req)
    try {
        const { userId } = req.body
        const budget = await Budget.findOne({
            where: {
                user_id: userId
            }
        })
        res.send(budget)
    } catch (error) {
        errorLog(GetOneBudget, error) 
    }
}


const ReadEntireBudget = async (req, res) => {
    log(ReadEntireBudget, req)
    try {
        const { userId } = req.body
        const budget = await Budget.findOne({
            where: {
                user_id: userId
            }, 
        })
        const { id: budgetId } = budget
        const incomes = await Income.findAll({
            where: {
                budget_id: budgetId
            },
            attributes: [ "id", "source", "amount" ]
        })
        let categories = await Category.findAll({
            raw: true,
            where: { 
                budget_id: budgetId 
            }, 
            attributes: [ "id", "name" ]
        })
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
        const entireBudget = {
            budgetId,
            incomes,
            categories
        }
        res.send(entireBudget)
    } catch (error) {
        errorLog(ReadEntireBudget, error)
    }
}



class BudgetUpdater {
    constructor({body}){
        this.budgetId = body.budgetId
        this.incomes = body.incomes
        this.categories = body.categories
        this.defaultIncome = {
            budgetId: this.budgetId,
            source: "income source #1", 
            amount: 0
        }
        this.defaultExpense = { expense: "expense #1", amount: 0 }
        this.defaultCategory = { name: "Category", budgetId: this.budgetId }
        this.newIncomeEntries = this.incomes.map(income => ({
            budgetId: this.budgetId,
            source: income.source, 
            amount: income.amount
        }))
        this.updatedBudget = { budgetId: this.budgetId }
    }


    destroy = () => {
        Income.destroy({
            where: { budget_id: this.budgetId }
        })
        Category.destroy({
            where: { budget_id: this.budgetId }
        })
    }

    addIncomesToDB = async () => (this.updatedBudget.incomes = await (this.incomes.length ? 
        Income.bulkCreate(this.newIncomeEntries) :
        this.addDefaultIncome())
    )

    addDefaultIncome = async () => {
        const oneDefaultIncome = await Income.create(this.defaultIncome)
        return [oneDefaultIncome] 
    }

    addDefaultCategory = async () => {
        const { id: newCategoryId, name} = await Category.create(this.defaultCategory)
        const oneDefaultExpense = await Expense.create({
            ...this.defaultExpense, 
            categoryId: newCategoryId
        })
        this.updatedBudget.categories = [{
            expenses: [oneDefaultExpense],
            categoryId: newCategoryId, 
            name, 
        }]
    }

    addExpenses = async (expenses, newCategoryId) => {
        return await Expense.bulkCreate(
            expenses.map(expense => ({
                categoryId: newCategoryId,
                expense: expense.expense, 
                amount: expense.amount
            }))
        )
    }

    makeCategoriesAndExpenses = async () => {
        this.categories.length ? 
            this.updatedBudget.categories = await Promise.all(
                    this.categories.map(async ({ name, expenses }) => {
                        try {
                            const { id: newCategoryId } = await Category.create({ name: name, budgetId: this.budgetId })
                            const newExpenses = await this.addExpenses(expenses, newCategoryId)
                            return { categoryId: newCategoryId, name, expenses: [...newExpenses] }
                            
                        } catch (error) {
                            console.log(error)
                        }
                })
            )
        :
        (await (async() => await this.addDefaultCategory())())
    }

    updateBudget = async () => {
        this.destroy()
        await this.addIncomesToDB()
        await this.makeCategoriesAndExpenses()
        console.log(this.updatedBudget)
    }

    getUpdatedBudget = () => this.updatedBudget
}


const UpdateEntireBudget = async (req, res) => {
    log(UpdateEntireBudget, req)
    try {
        const updater = new BudgetUpdater(req)
        await updater.updateBudget()
        const updatedBudget = updater.getUpdatedBudget()
        res.send(updatedBudget)
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
