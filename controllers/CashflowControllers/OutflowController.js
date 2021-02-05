const { Outflow } = require('../../models')
const { ControllerLoggers } = require('../logs')
const log = ControllerLoggers.OutflowControllerLog 
const errorLog = ControllerLoggers.OutflowControllerErrorLog


const CreateOutflow = async (req, res) => {
    log(CreateOutflow, req)
    try {
        const outflow = await Outflow.create(req.body)
        res.send(outflow)
    } catch (error) {
        errorLog(CreateOutflow, error) 
    }
}


const CreateManyOutflows = async (req, res) => {
    log(CreateManyOutflows, req)
    try {
        const {outflows, flowcategoryId} = req.body
        const newOutflows = Promise.all(outflows.map(async (Outflow) => {
            const OutflowToCreate = {
                flowcategoryId, 
                source: outflow.source, 
                amount: outflow.amount
            }
            const newOutflow = await Outflow.create(OutflowToCreate)
            return newOutflow
        }))
        res.send(newOutflows)
    } catch (error) {
        errorLog(CreateManyOutflows, error)  
    }
}


const GetOneOutflow = async (req, res) => {
    log(GetOneOutflow, req)
    try {
        const { outflowId } = req.body
        const outflow = await Outflow.findOne({
            where: {
                id: outflowId
            }
        })
        res.send(outflow)
    } catch (error) {
        errorLog(GetOneOutflow, error) 
    }
}


const GetAllOutflows = async (req, res) => {
    log(GetAllOutflows, req)
    try {
        const { flowcategoryId } = req.body
        const outflows = await Outflow.findAll({
            where: {
                flowcategory_id: flowcategoryId
            }
        })
        res.send(outflows)
    } catch (error) {
        errorLog(GetAllOutflows, error) 
    }
}


module.exports = {
    CreateManyOutflows,
    GetAllOutflows,
    CreateOutflow,
    GetOneOutflow,
}