const { Month } = require('../../models')
const { ControllerLoggers } = require('../logs')
const { defaultMonths } = require("../modules/data")
// const { Op, literal, fn, col  } = require('sequelize')
const log = ControllerLoggers.MonthControllerLog 
const errorLog = ControllerLoggers.MonthControllerErrorLog


/**
 * @param {Object} req.body - The month object.
 * @param {Integer} req.body.cashflowId - The id of the cashflow that has the month.
 * @param {String} req.body.month - The name of the month.
 * @param {Integer} req.body.year - The year of the month
 */

const CreateMonth = async (req, res) => {
    log(CreateMonth, req)
    try {
        const month = await Month.create(req.body)
        res.send(month)
    } catch (error) {
        errorLog(CreateMonth, error) 
    }
}


/**
 * @param {Object} req.body - The month object.
 * @param {Integer} req.body.cashflowId - The id of the cashflow that has the month.
 */

const GetMonth = async (req, res) => {
    log(GetMonth, req)
    try {
        const { cashflowId } = req.body
        const month = await Month.findOne({
            where: {
                id: cashflowId
            }
        })
        res.send(month)
    } catch (error) {
        errorLog(GetMonth, error) 
    }
}


/**
 * @param {Object} req.body - The month object.
 * @param {Integer} req.body.cashflowId - The id of the cashflow that has the month.
 */

const GetMonths = async (req, res) => {
    log(GetMonths, req)
    try {
        const { cashflowId } = req.body
        const months = await Month.findAll({
            where: { 
                cashflow_id: cashflowId 
            }
        })
        res.send(months)
    } catch (error) {
        errorLog(GetMonths, error)
    }
}


module.exports = {
    CreateMonth,
    GetMonth,
    GetMonths,
}