const { ControllerLoggers } = require('../logs')
const { defaultMonths, defaultCategories, nextCalendarYear } = require("../modules/data")
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


/**
 * @param {Object} req.body - The month object.
 * @param {Integer} req.body.userId - The id of the user.
- The year of the month
 */

const CreateDefaultCashflow = async (req, res) => {
    log(CreateDefaultCashflow, req)
    try {

        const cashflow = await Cashflow.create(req.body,{
            query: { raw:true}
        })
        const { id: cashflowId } = cashflow

        console.log("cashflow: ", cashflow)

        const today = new Date()
        const y = today.getFullYear()
        const m = today.getMonth()

        const nextTwelveMonths = nextCalendarYear(y, m, cashflowId)
        
        const months = await Month.bulkCreate(nextTwelveMonths,{
            query: { raw:true}
        })
        console.log("MONTHS:", months)
        
        const packagedMonths = await Promise.all(months.map(async (month) => {
            const { id: monthId } = month
            const newInflows = await Inflow.create({
                monthId,
                source: "Job 1",
                amount: 0
            },
            {query: { raw:true}}
            )

            const flowcategoryNames = Object.keys(defaultCategories)
            const flowcategoriesToCreate = flowcategoryNames.map(name => {
                const fc = {
                    name: name,
                    monthId: monthId
                }
                return fc
            })

            const newFlowcategories = await Flowcategory.bulkCreate(flowcategoriesToCreate,
                {query: { raw:true}}
                )

            const packagedFlowcategories = await Promise.all(newFlowcategories.map(async (category) => {
                const { id: flowcategoryId, name } = category
                const outflowNames = Object.values(defaultCategories[name])

                const outflowsToCreate = outflowNames.map(outflowName => ({
                    flowcategoryId,
                    outflow: outflowName,
                    amount: 0
                }))

                const newOutflows = await Outflow.bulkCreate(outflowsToCreate, 
                    {query: { raw:true}})

                return {...category, outflows: newOutflows}
            }))

            const packagedMonth = {
                ...month,
                flowcategories: packagedFlowcategories,
                inflows: newInflows
            }

            // console.log("PACKAGED MONTH:", packagedMonth)

            return packagedMonth
        }))

        const entireCashflow = {...cashflow, months: packagedMonths}

        res.send(entireCashflow)
    } catch (error) {
        errorLog(CreateDefaultCashflow, error) 
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
    UpdateEntireCashflow,
    CreateDefaultCashflow
}
