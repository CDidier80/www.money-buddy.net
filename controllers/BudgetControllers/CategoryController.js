const { defaultCategories } = require("../modules/data")
const { Category, Expense } = require('../../models')
const { ControllerLoggers } = require('../logs')
const log = ControllerLoggers.CategoryControllerLog 
const errorLog = ControllerLoggers.CategoryControllerErrorLog


/**
 * @param {Object} req.body - The category object.
 * @param {String} req.body.name - The name of the category.
 * @param {Integer} req.body.budgetId - The id of the budget that has the category.
 */

const CreateCategory = async (req, res) => {
    log(CreateCategory, req)
    try {
        const category = await Category.create(req.body)
        res.send(category)
    } catch (error) {
        errorLog(CreateCategory, error) 
    }
}


const RestoreDefaultCategories = async (req, res) => {
    log(RestoreDefaultCategories, req)
    try {
        const { budgetId } = req.body
        await Category.destroy({ where: {} })
        for (let category in defaultCategories) {
            const newCategory = await Category.create({budgetId: budgetId, name: category})
            const { id: categoryId } = newCategory
            const expenses = defaultCategories[category]
            expenses.forEach( async (expense) => {
                await Expense.create({categoryId, expense: expense, amount: 0})
            })
        }
        res.send({message: "Defaults restored"})
    } catch (error) {
        errorLog(RestoreDefaultCategories, error)
    }
} 


const GetOneCategory = async (req, res) => {
    log(GetOneCategory, req)
    try {
        const { categoryId } = req.body
        const category = await Category.findOne({
            where: {
                id: categoryId
            }
        })
        res.send(category)
    } catch (error) {
        errorLog(GetOneCategory, error) 
    }
}


const ReadBudgetCategories = async (req, res) => {
    log(ReadBudgetCategories, req)
    try {
        const { budgetId } = req.body
        const categories = await Category.findAll({
            where: { 
                budget_id: budgetId 
            }
        })
        res.send(categories)
    } catch (error) {
        throw error
    }
}


/**
 * @param {Object} req.body - The category object.
 * @param {String} req.body.name - The name of the category.
 * @param {Integer} req.body.budgetId - The id of the budget that has the category.
 **/

const DeleteCategoriesFromBudget = async (req,res) => {
    log(DeleteCategoriesFromBudget, req)
    try {
        const { budgetId } = req.body
        Category.destroy({
            where: { 
                budget_id: budgetId 
            }
        })
        res.send({message: "delete finished"})
    } catch (error) {
        errorLog(DeleteCategoriesFromBudget, error)
    }
}

module.exports = {
    DeleteCategoriesFromBudget,
    RestoreDefaultCategories,
    ReadBudgetCategories,
    CreateCategory,
    GetOneCategory,
}