const { Flowcategory } = require('../../models')
const { ControllerLoggers } = require('../logs')
const log = ControllerLoggers.FlowcategoryControllerLog 
const errorLog = ControllerLoggers.FlowcategoryControllerErrorLog


/**
 * @param {Object} req.body - The month object.
 * @param {Integer} req.body.monthId - The id of the month that has the Flowcategory.
 * @param {String} req.body.name - The name of the month.
 */

const CreateFlowcategory = async (req, res) => {
    log(CreateFlowcategory, req)
    try {
        const flowcategory = await Flowcategory.create(req.body)
        res.send(flowcategory)
    } catch (error) {
        errorLog(CreateFlowcategory, error) 
    }
}


/**
 * @param {Object} req.body - The Flowcategory object.
 * @param {Integer} req.body.monthId - The id of the month that has the Flowcategory.
 * @param {name} req.body.name - The name of the Flowcategory.
 */

const GetFlowcategory = async (req, res) => {
    log(GetFlowcategory, req)
    try {
        const { monthId } = req.body
        const flowcategory = await Flowcategory.findOne({
            where: {
                id: monthId
            }
        })
        res.send(flowcategory)
    } catch (error) {
        errorLog(GetFlowcategory, error) 
    }
}


/**
 * @param {Object} req.body - The Flowcategory object.
 * @param {Integer} req.body.monthId - The id of the cashflow that has the Flowcategory.
 */

const GetFlowcategories= async (req, res) => {
    log(GetFlowcategories, req)
    try {
        const { monthId } = req.body
        const flowcategories = await Flowcategory.findAll({
            where: { 
                month_id: monthId 
            }
        })
        res.send(flowcategories)
    } catch (error) {
        errorLog(GetFlowcategories, error)
    }
}


module.exports = {
    CreateFlowcategory,
    GetFlowcategories,
    GetFlowcategory,
}