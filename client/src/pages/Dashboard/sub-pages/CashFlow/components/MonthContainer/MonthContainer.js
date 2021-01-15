import React, {useState, useEffect} from 'react'
import { initTotalInflow, initTotalOutflow } from "./modules/initFunctions"
import SummaryAccordion from "./Summary/SummaryAccordion"
import OutflowsAccordion from "./Outflows/OutflowAccordion/OutflowsAccordion"
import InflowsAccordion from "./Inflows/InflowAccordion/InflowsAccordion"

const MonthContainer = (props) => {

    const { monthIndex, thisMonth } = props.fromPaginatingContainer
    const { 
        monthId,
        month,
        year,
        flowcategories, 
        inflows
    } = thisMonth

    const { outflows } = flowcategories



    const [newFlowcategories, setNewFlowcategories] = useState(null)
    const [monthlyInflows, setMonthlyInflows] = useState(0)
    const [monthlyOutflows, setMonthlyOutflows] = useState(0)
    const [totalOutflow, setTotalOutflow] = useState(0)
    const [totalInflow, setTotalInflow] = useState(0)

    // initialize copies of inflows, outflows, flowcategories on first render
    useEffect(() => {
        console.log("Initial-load Cashflow useEffect --> categories, inflows")

        const newTotalOutflow =  initTotalOutflow(flowcategories)
        const newTotalInflow =  initTotalInflow(inflows)
        setMonthlyInflows(inflows)
        setMonthlyOutflows(outflows)
        setTotalInflow(newTotalInflow)
        setTotalOutflow(newTotalOutflow)
        setNewFlowcategories(flowcategories)
    }, [])


    // Recalculate totals when outflows/inflows change
    useEffect(() => {
        console.log("Recalculate totals MonthContainer useEffect")

        const newTotalOutflow =  initTotalOutflow(monthlyOutflows)
        const newTotalInflow =  initTotalInflow(monthlyInflows)
        setTotalInflow(newTotalInflow)
        setTotalOutflow(newTotalOutflow)
        setNewFlowcategories(newFlowcategories)
    }, [
        monthlyInflows, 
        monthlyOutflows, 
        newFlowcategories
    ])


    const summaryAccordionProps = {
        totalOutflow,
        totalInflow,
    }

    const inflowsAccordionProps = {
        setTotalInflow,
        monthlyInflows,
        setMonthlyInflows
    }

    const outflowsAccordionProps = {
        setTotalOutflow,
        setMonthlyOutflows,
        monthlyOutflows,
        newFlowcategories,
        setNewFlowcategories
    }

    return (
        <div>
            <SummaryAccordion 
                {...props}
                fromMonthContainer={{...summaryAccordionProps}}
            />
            <InflowsAccordion 
                {...props}
                fromMonthContainer={{...inflowsAccordionProps}}
            />
            <OutflowsAccordion 
                {...props}
                fromMonthContainer={{...outflowsAccordionProps}}
            />
        </div>
    )
}

export default MonthContainer
