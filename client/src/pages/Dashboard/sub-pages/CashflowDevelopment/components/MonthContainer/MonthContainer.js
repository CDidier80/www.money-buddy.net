import React, {useState, useEffect} from 'react'
import SummaryAccordion from "./Summary/SummaryAccordion"
import OutflowsAccordion from "./Outflows/OutflowAccordion/OutflowsAccordion"
import InflowsAccordion from "./Inflows/InflowAccordion/InflowsAccordion"
import "./styles/monthContainer.css"

const MonthContainer = (props) => {

    // console.log("fromPaginatingContainer:", props)
    /* -------------------------- PROPS ------------------------- */

    const { 
        inflows: inflowsDataset,
        outflows: outflowsDataset, 
        cashReserves
    } = props.fromCashflowDevelopment

    const { 
        thisMonth,
        monthIndex
    } = props.fromPaginatingContainer

    const { 
        flowcategories, 
        inflows
    } = thisMonth

    /* -------------------------- STATE ------------------------- */

    const [newFlowcategories, setNewFlowcategories] = useState("")
    const [monthlyInflows, setMonthlyInflows] = useState("")
    const [totalOutflow, setTotalOutflow] = useState("")
    const [totalInflow, setTotalInflow] = useState("")
    const [loaded, setLoaded] = useState(false)

    
    /* -------------------------- useEffects ------------------------- */

             /* useEffect #1: -- init local copies of cashflow info -- */

    const dependencyArray = [
        newFlowcategories, 
        monthlyInflows, 
        totalOutflow,
        totalInflow,
    ]

    useEffect(() => {
        setMonthlyInflows(inflows)
        setTotalInflow(inflowsDataset[monthIndex])
        setTotalOutflow(outflowsDataset[monthIndex])
        setNewFlowcategories(flowcategories)
    }, [])


             /* useEffect #2: -- recalculate totals on outflow/inflow changes -- */

    useEffect(() => {
        if (!dependencyArray.includes("")){
            const newTotalInflow =  thisMonth.totalInflows
            const newTotalOutflow =  thisMonth.totalOutflows
            setTotalInflow(newTotalInflow)
            setTotalOutflow(newTotalOutflow)
            setNewFlowcategories(flowcategories)
        }
    },
    [
        monthlyInflows, 
        newFlowcategories
    ])


            /* useEffect #3: --- ensure all state set before rendering children --- */

    useEffect(() => {
        let childrenShouldRender = true
        dependencyArray.forEach((state) => {
            if (state === "") {
                childrenShouldRender = false
            }
        })
        setLoaded(childrenShouldRender ? true : false)
    }, [...dependencyArray])



    /* --------------------- PROPS FOR CHILDREN --------------------- */

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
        newFlowcategories,
        setNewFlowcategories
    }


    return ( !loaded ? <div></div> :
        <div 
            className="month-container"
        >
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
