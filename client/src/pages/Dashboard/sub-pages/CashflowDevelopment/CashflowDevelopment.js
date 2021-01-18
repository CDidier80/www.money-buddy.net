import React, {useEffect, useState} from 'react';
import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"
import Chart from "./components/Chart/Chart"
import { generateMonths } from "./modules/MonthClass"
import CashflowHeader from './components/CashflowHeader';
import "./styles/CashFlow.css"

const CashflowDevelopment = (props) => {

    console.log(props)

    const [newMonths, setMonths] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [tick, incrementTicker] = useState(0)

    useEffect(() => {
        const generatedMonths = generateMonths()
        setMonths(generatedMonths)
    }, [tick])

    useEffect(() => {
        if (newMonths !== "") {
            setLoaded(true)
        }

    }, [newMonths])


    const headerProps = {
        setLoaded, 
        tick,
        incrementTicker,
    }

    const paginatingContainerProps = {
        newMonths
    }

    return ( !loaded ? <div></div> : 

        <div className="cashflow">
            <CashflowHeader 
                fromCashflowDevelopment={{...headerProps}}
            />
            <Chart months={newMonths}/>
            <PaginatingContainer 
                {...props}
                fromCashflowDevelopment={{...paginatingContainerProps}}
            />

        </div>
    )
}

export default CashflowDevelopment

