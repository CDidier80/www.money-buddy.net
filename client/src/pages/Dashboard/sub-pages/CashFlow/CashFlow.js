import React, { useState, useEffect } from 'react';
import { useSnackbar, withSnackbar } from 'notistack';
import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"
import CashflowHeader from './components/PageHeader/CashflowHeader';
import "./styles/CashFlow.css"

const Cashflow = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { months } = props.fromDashboard
    /* -------------------------- STATE ------------------------- */

    const [cashflowLoaded, setCashflowLoaded] = useState(false)
    const [tick, updateCashflow] = useState(0)
    const [userMadeChanges, toggleChanges] = useState(null)
    const [newMonths, setNewMonths] = useState("")

    
    /* ------------------------ useEffects ----------------------- */

    useEffect(() => {
        console.log("useEffect 1")
        // console.log("Initial-load Cashflow useEffect --> categories, inflows")
        const orderedMonths = orderMonths(months)
        console.log("orderedMonths:",orderedMonths)
        setNewMonths(orderedMonths)
    }, [])


    useEffect(() => {
        console.log("useEffect 2")
        if (newMonths === ""){
            console.log(newMonths)
            console.log("newMonths still undefined ")
        } else {
            console.log("newMonths is updated with state")
            console.log(newMonths)
        }
        setCashflowLoaded(newMonths === "" ? false : true)
    }, [newMonths])



    /* ------------------------- FUNCTIONS ----------------------- */

    let defaultMonths = {
        "January" : 0,
        "February" : 1,
        "March" : 2,
        "April" : 3,
        "May" : 4,
        "June" : 5,
        "July" : 6, 
        "August" : 7, 
        "September" : 8,
        "October" : 9,
        "November" : 10, 
        "December" : 11,
    }

    const orderMonths = (months) => {
        const today = new Date()
        const thisYear = today.getFullYear()

        let thisYearMonths = []
        let nextYearMonths = []
        months.forEach(month => {
            const { year } = month
            if (year === thisYear) {
                thisYearMonths.push(month)
            } else {
                nextYearMonths.push(month)
            }
        })
        let sortedThisYearMonths = new Array(thisYearMonths.length)
        let sortedNextYearMonths = new Array(nextYearMonths.length)
        const indexAdjustment = 12 - thisYearMonths.length 

        thisYearMonths.forEach(month => {
            const {month: monthName} = month
            const insertIndex = defaultMonths[monthName] - indexAdjustment
            sortedThisYearMonths[insertIndex] = month
        })
        nextYearMonths.forEach(month => {
            const {month: monthName} = month
            const insertIndex = defaultMonths[monthName]
            sortedNextYearMonths[insertIndex] = month
        })
        const sortedMonths = [...sortedThisYearMonths, ...sortedNextYearMonths]
        return sortedMonths
    }


    /* -------------------- PROPS FOR CHILDREN ------------------ */

    const paginatingContainerProps = { 
        newMonths,
        setNewMonths,
        toggleChanges,
        userMadeChanges,
        updateCashflow,
        tick,
    } 


    return ( !cashflowLoaded ? <div></div> :

        <div className="cashflow">
            <CashflowHeader 
                {...props}
                fromCashflow={{...userMadeChanges}}
            />
            {/* <Graph /> */}
            <PaginatingContainer 
                {...props}
                fromCashflow={{...paginatingContainerProps}}
            />

        </div>
    )
}

export default withSnackbar(Cashflow)

