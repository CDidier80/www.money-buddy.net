import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"
import InDevelopmentPopup from "./components/InDevelopmentPopup/InDevelopmentPopup"
import CashflowHeader from './components/CashflowHeader/CashflowHeader'
import { generateMonths } from "./modules/MonthClass"
import React, {useEffect, useState} from 'react'
import Chart from "./components/Chart/Chart"
import "./styles/CashFlow.css"


const CashflowDevelopment = (props) => {

    /* ----------------------- STATE ----------------------- */
    
    const [inflows, setInflows] = useState("")
    const [newMonths, setMonths] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [tick, incrementTicker] = useState(0)
    const [outflows, setOutflows] = useState("")
    const [showPopup, toggleShowPopup] = useState(true)
    const [cashReserves, setCashReserves] = useState("")



    useEffect(() => {
        const generatedMonths = generateMonths()
        setMonths(generatedMonths)
        const [
            inflows,
            outflows, 
            adjustedCashReserves
        ] = createDatasets(generatedMonths)
        setInflows(inflows)
        setOutflows(outflows)
        setCashReserves(adjustedCashReserves)

    }, [tick])

    useEffect(() => {
        if (
            inflows      !== ""  |
            outflows     !== ""  |
            newMonths    !== ""  |
            cashReserves !== "" 
        ){
            setLoaded(true)
        }
    },  
    [
        inflows,
        outflows, 
        newMonths,
        cashReserves
    ])


    /* ----------------------- FUNCTIONS ----------------------- */

    const createDatasets = (months) => {

        let inflows = []
        let outflows = []
        let monthlyCashReserve = [1000]

        months.forEach(month => {
            const index = monthlyCashReserve.length - 1
            const lastCashReserve = monthlyCashReserve[index]
            const totalInflows = month.totalInflows
            const totalOutflows = month.totalOutflows
            const monthlyCashflow = totalInflows - totalOutflows
            const newCashReserve = lastCashReserve + monthlyCashflow
            inflows.push(totalInflows)
            outflows.push(totalOutflows)
            monthlyCashReserve.push(newCashReserve)
        })
        let adjustedCashReserves = monthlyCashReserve.slice(1)
        return [inflows, outflows, adjustedCashReserves]
    }

//     /* ----------------------- PROPS FOR CHILDREN ----------------------- */

    const headerProps = {
        tick,
        setLoaded, 
        incrementTicker,
    }

    const chartProps = {
        inflows,
        outflows, 
        showPopup,
        cashReserves,
    }

    const paginatingContainerProps = {
        inflows,
        outflows, 
        newMonths,
        showPopup,
        cashReserves
    }

    /* -------------------------- JSX -------------------------- */

    return ( !loaded ? <div></div> : 

        <div className="cashflow">
            {showPopup && (
                <InDevelopmentPopup 
                    toggleShowPopup={toggleShowPopup}
                />
            )}
            <CashflowHeader 
                fromCashflowDevelopment={{...headerProps}}
            />
            <Chart 
                {...props.fromApp}
                fromCashflowDevelopment={{...chartProps}}
            />
            <PaginatingContainer 
                {...props}
                fromCashflowDevelopment={{...paginatingContainerProps}}
            />

        </div>
    )
}

export default CashflowDevelopment

