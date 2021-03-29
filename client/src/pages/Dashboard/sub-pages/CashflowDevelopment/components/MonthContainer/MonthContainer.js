import React, {useState, useEffect, memo} from 'react'
import MemoContent from './MemoContent/MemoContent'
import { makeMonthContainerStyles } from "./styles/styles"

const MonthContainer = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { 
        theme,
        thisMonth,
        monthIndex,
        displayRange,
        cashReserves,
        inflows: inflowsDataset,
        outflows: outflowsDataset, 
    } = props

    const { 
        inflows,
        flowcategories, 
        totalInflows,
        totalOutflows
    } = thisMonth

    /* -------------------------- STATE ------------------------- */

    const [loaded, setLoaded] = useState(false)
    const [totalInflow, setTotalInflow] = useState("")
    const [totalOutflow, setTotalOutflow] = useState("")
    const [monthlyInflows, setMonthlyInflows] = useState("")
    const [newFlowcategories, setNewFlowcategories] = useState("")

    
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
        setNewFlowcategories(flowcategories)
        setTotalInflow(inflowsDataset[monthIndex])
        setTotalOutflow(outflowsDataset[monthIndex])
    }, [])


    /* useEffect #2: -- recalculate totals on outflow/inflow changes -- */

    useEffect(() => {
        if (!dependencyArray.includes("")){
            const newTotalInflow = totalInflows
            const newTotalOutflow = totalOutflows
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


    /* --------------------- FUNCTION --------------------- */

    const display = displayRange.includes(monthIndex) ? "block" : 'none'
    const { monthContainer } = makeMonthContainerStyles(theme)

    /* --------------------- PROPS FOR CHILDREN --------------------- */


    const memoProps = {
        ...props,
        totalOutflow,
        totalInflow,
        setTotalInflow,
        monthlyInflows,
        setMonthlyInflows,
        setTotalOutflow,
        newFlowcategories,
        setNewFlowcategories
    }

    const divProps = {
        className: monthContainer, 
        style: {display: display}
    }


    return ( !loaded ? <div></div> :
            <div {...divProps} >
                <MemoContent {...memoProps} />
            </div>
    )
}

export default MonthContainer


