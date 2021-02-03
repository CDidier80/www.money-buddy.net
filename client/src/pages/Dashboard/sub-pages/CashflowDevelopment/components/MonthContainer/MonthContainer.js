import React, {useState, useEffect, memo} from 'react'
import MemoContent from './MemoContent/MemoContent'
import { staticStyles } from "./styles/staticStyles"
import { makeStyles } from '@material-ui/core/styles'
import { accordionTheme } from './styles/accordionTheme'
import { ThemeProvider } from '@material-ui/core/styles'

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
        monthIndex,
        displayRange,
    } = props.fromPaginatingContainer

    const { 
        flowcategories, 
        inflows
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
            const newTotalInflow = thisMonth.totalInflows
            const newTotalOutflow = thisMonth.totalOutflows
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

    const useStyles = makeStyles({
        monthContainer : {
            ...staticStyles,
            display: displayRange.includes(monthIndex) ? "block" : 'none',
        }
    })

    const classes = useStyles()

    /* --------------------- PROPS FOR CHILDREN --------------------- */


    const memoProps = {
        totalOutflow,
        totalInflow,
        setTotalInflow,
        monthlyInflows,
        setMonthlyInflows,
        setTotalOutflow,
        newFlowcategories,
        setNewFlowcategories
    }


    return ( !loaded ? <div></div> :
        <ThemeProvider theme={accordionTheme}>
            <div 
                className={classes.monthContainer}
            >
                <MemoContent 
                    {...props}
                    fromMonthContainer={{...memoProps}}
                />
            </div>
        </ThemeProvider>
    )
}

export default MonthContainer


