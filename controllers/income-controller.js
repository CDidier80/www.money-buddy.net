const { Income } = require('../models')
const { ControllerLoggers } = require('./logs')
const log = ControllerLoggers.IncomeControllerLog 
const errorLog = ControllerLoggers.IncomeControllerErrorLog

const CreateIncome = async (req, res) => {
    log(CreateIncome, req)
    try {
        const income = await Income.create(req.body)
        res.send(income)
    } catch (error) {
        errorLog(CreateIncome, error) 
    }
}

const CreateManyIncomes = async (req, res) => {
    log(CreateManyIncomes, req)
    try {
        const {incomes, budgetId} = req.body
        const newIncomes = incomes.map(async (income) => {
            const incomeToCreate = {
                budgetId, 
                source: income.source, 
                amount: income.amount
            }
            const newIncome = await Income.create(incomeToCreate)
            return newIncome
        })
        return newIncomes
    } catch (error) {
        errorLog(CreateManyIncomes, error)  
    }
}

const GetOneIncome = async (req, res) => {
    log(GetOneIncome, req)
    try {
        const { incomeId } = req.body
        const income = await Income.findOne({
            where: {
                id: incomeId
            }
        })
        res.send(income)
    } catch (error) {
        errorLog(GetOneIncome, error) 
    }
}

const ReadBudgetIncomes = async (req, res) => {
    log(ReadBudgetIncomes, req)
    try {
        const { budgetId } = req.body
        const incomes = await Income.findAll({
            where: {
                budget_id: budgetId
            }
        })
        res.send(incomes)
    } catch (error) {
        errorLog(ReadBudgetIncomes, error) 
    }
}

module.exports = {
    CreateIncome,
    GetOneIncome,
    ReadBudgetIncomes,
    CreateManyIncomes,
}