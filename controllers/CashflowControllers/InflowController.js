const { Inflow } = require('../../models')
const { ControllerLoggers } = require('../logs')
const log = ControllerLoggers.InflowControllerLog 
const errorLog = ControllerLoggers.InflowControllerErrorLog


const CreateInflow = async (req, res) => {
    log(CreateInflow, req)
    try {
        const inflow = await Inflow.create(req.body)
        res.send(inflow)
    } catch (error) {
        errorLog(CreateInflow, error) 
    }
}


const CreateManyInflows = async (req, res) => {
    log(CreateManyInflows, req)
    try {
        const {inflows, monthId} = req.body
        const newInflows = Promise.all(inflows.map(async (inflow) => {
            const inflowToCreate = {
                monthId, 
                source: inflow.source, 
                amount: inflow.amount
            }
            const newInflow = await Inflow.create(inflowToCreate)
            return newInflow
        }))
        return newInflows
    } catch (error) {
        errorLog(CreateManyInflows, error)  
    }
}


const GetOneInflow = async (req, res) => {
    log(GetOneInflow, req)
    try {
        const { inflowId } = req.body
        const inflow = await Inflow.findOne({
            where: {
                id: inflowId
            }
        })
        res.send(inflow)
    } catch (error) {
        errorLog(GetOneInflow, error) 
    }
}


const GetAllInflows = async (req, res) => {
    log(ReadmonthInflows, req)
    try {
        const { monthId } = req.body
        const inflows = await Inflow.findAll({
            where: {
                month_id: monthId
            }
        })
        res.send(inflows)
    } catch (error) {
        errorLog(GetAllInflows, error) 
    }
}


module.exports = {
    CreateInflow,
    GetOneInflow,
    GetAllInflows,
    CreateManyInflows
}