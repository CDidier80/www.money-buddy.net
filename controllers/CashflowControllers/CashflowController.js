const { ControllerLoggers } = require('../logs')
const log = ControllerLoggers.CashflowControllerLog 
const errorLog = ControllerLoggers.CashflowControllerErrorLog
const { 
    Cashflow, 
    Inflow, 
    Flowcategory, 
    Outflow, 
    Month
} = require('../../models')


const CreateCashflow = async (req, res) => {
    log(CreateCashflow, req)
    try {
        const cashflow = await Cashflow.create(req.body)
        res.send(cashflow)
    } catch (error) {
        errorLog(CreateCashflow, error) 
    }
}

const GetOneCashflow = async (req, res) => {
    log(GetOneCashflow, req)
    try {
        const { userId } = req.body
        const cashflow = await Cashflow.findOne({
            where: {
                user_id: userId
            }
        })
        res.send(cashflow)
    } catch (error) {
        errorLog(GetOneCashflow, error) 
    }
}

const ReadEntireCashflow = async (req, res) => {
    log(ReadEntireCashflow, req)
    try {
        const entireCashflow = await Cashflow.findOne({
            where: {
                user_id: userId
            }, 
            include: [
                {   
                    model: Month,
                    as: "months",
                    include: [
                        {
                            model: Inflow,
                            as: "inflows",
                            attributes: [ "id", "source", "amount" ]
                        },
                        {
                            model: Flowcategory,
                            as: "categories",
                            attributes: [ "id", "name" ],
                            include: [{
                                model : Outflow,
                                as: "outflow",
                                attributes: [ "id", "outflow", "amount" ]
                            }]
                        }, 
                    ]
                },
            ]
        })
            
        console.log(entireCashflow)
        res.send(entireCashflow)
    } catch (error) {
        errorLog(ReadEntireCashflow, error)
    }
}


const UpdateEntireCashflow = async (req, res) => {
    log(UpdateEntireCashflow, req)
    try {
        const { cashflowId, months } = req.body

        await Month.destroy({
            where: {
                cashflow_id: cashflowId
            }
        })

        const updatedMonths = await Promise.all(months.map(async (month) => {
            const { inflows, categories } = month
            const monthToCreate = {
                cashflowId,
                month: month,
            }
            const newMonth = await Month.create(monthToCreate)
            const {id: monthId} = newMonth
            const newInflows = await Promise.all(inflows.map(async (inflow) => {
                const { amount, source } = inflow
                const inflowToCreate = {
                    monthId,
                    source : source,
                    amount : amount,
                }
                const newInflow = await Inflow.create(inflowToCreate)
                return newInflow
            }))
            const newFlowcategories = Promise.all(categories.map( async (flowCategory) => {
                const { outflows, name } = flowCategory
                const flowCategoryToCreate = {
                    monthId,
                    name, 
                } 
                const newFlowCategory = await Flowcategory.create(flowCategoryToCreate)
                const { id: flowcategoryId } = newFlowCategory
                const newOutflows = Promise.all(outflows.map( async (out) => {
                    const { outflow, amount } = out
                    const outflowToCreate = {
                        flowcategoryId,
                        outflow : outflow,
                        amount : amount
                    }
                    const newOutflow = await Outflow.create(outflowToCreate)
                    return newOutflow
                }))
                const categoryWithOutflows = {
                    ...newFlowCategory,
                    outflows: newOutflows
                }
                return categoryWithOutflows
            }))
            const packagedMonth = {
                ...newMonth,
                inflows: newInflows,
                flowcategories : newFlowcategories
            }
            return packagedMonth
        }))

        const entireCashflow = {
            cashflowId : cashflowId,
            months: updatedMonths
        }
        console.log("entire Cashflow:", entireCashflow)
        res.send(entireCashflow)
    } catch (error) {
        errorLog(UpdateEntireCashflow, error)
    }
}

            // const newOutflow = Outflow.map( async (Outflow) => {
            //     await CreateOutflow({
            //         categoryId : newCategory.id,
            //         Outflow: Outflow, 
            //         amount: Outflow.amount
            //     })
            // })


        // repopulate Cashflow with updated content
        

        // destroy current Cashflow contents
        // await inflow.destroy({
        //     where: {
        //         Cashflow_id: cashflowId
        //     }
        // })

        // await Category.destroy({
        //     where: { 
        //         Cashflow_id: cashflowId 
        //     }
        // })

module.exports = {
    CreateCashflow,
    GetOneCashflow,
    ReadEntireCashflow,
    UpdateEntireCashflow
}
