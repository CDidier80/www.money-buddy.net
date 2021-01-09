const { Budget, Income, Category, Expense } = require('../models')
const expenseController = require('./ExpenseController')
const incomeController = require('./IncomeController')
const { ControllerLoggers } = require('./logs')
const { CreateManyExpenses } = expenseController
const { CreateManyIncomes } = incomeController
// const { Op, literal, fn, col  } = require('sequelize')
const log = ControllerLoggers.BudgetControllerLog 
const errorLog = ControllerLoggers.BudgetControllerErrorLog

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
    console.log(req.body)
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
        console.log(entireBudget)
        res.send(entireBudget)
    } catch (error) {
        errorLog(ReadEntireBudget, error)
    }
}


const UpdateEntireBudget = async (req, res) => {
    console.log(CreateManyIncomes)
    console.log(req.body)
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
            console.log(newExpenses)
            return { categoryId: newCategoryId, name, expenses: [...newExpenses] }
        }))

        const entireBudget = {
            budgetId : budgetId,
            incomes: [...newIncomes],
            categories: [...newCategoriesWithExpenses]
        }

        console.log("entire budget:", entireBudget)
        res.send(entireBudget)
    } catch (error) {
        errorLog(UpdateEntireBudget, error)
    }
}

            // const newExpenses = expenses.map( async (expense) => {
            //     await CreateExpense({
            //         categoryId : newCategory.id,
            //         expense: expense, 
            //         amount: expense.amount
            //     })
            // })


        // repopulate budget with updated content
        

        // destroy current budget contents
        // await Income.destroy({
        //     where: {
        //         budget_id: budgetId
        //     }
        // })

        // await Category.destroy({
        //     where: { 
        //         budget_id: budgetId 
        //     }
        // })

module.exports = {
    CreateBudget,
    GetOneBudget,
    ReadEntireBudget,
    UpdateEntireBudget
}




// const budget = await Budget.findOne({
//     where: {
//         user_id: userId
//     }, 
//     include: [
//         {
//             model: Income,
//             as: "budget_income"
//         },
//         {
//             model: Category,
//             as: "alias",
//             include: [{
//                 model : Expenses,
//                 as: "alias"
//             }]
//         }, 
//     ]
// }

// )