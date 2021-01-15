import React, { useState, useEffect } from 'react';
import { useSnackbar, withSnackbar } from 'notistack';
import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"
import SavePageButton from './components/SavePageButton';
import "./styles/CashFlow.css"

const Cashflow = (props) => {

    {/*  PROPS */}

    const { 
        months,
        inflows
    } = props.fromDashboard

    console.log(props)
    {/*  STATE  */}

    // const [cashflowLoaded, setCashflowLoaded] = useState(false)
    // const [tick, updateCashflow] = useState(0)
    // const [userMadeChanges, toggleChanges] = useState(false)
    // const [newInflows, setNewInflows] = useState([])
    // const [newMonths, setNewMonths] = useState([])

    const [cashflowLoaded, setCashflowLoaded] = useState(null)
    const [tick, updateCashflow] = useState(0)
    const [userMadeChanges, toggleChanges] = useState(null)
    const [newMonths, setNewMonths] = useState(null)

    
    {/*  useEffects  */}

    // initial page load where state is set by dashboard Cashflow data
    // useEffect(() => {
    //     console.log("Initial-load Cashflow useEffect --> categories, inflows")
    //     setNewInflows(inflows)
    //     setNewMonths(months)
    //     setCashflowLoaded(true)
    // }, [inflows, months])


    // useEffect(() => {
    //     console.log("Initial-load Cashflow useEffect --> categories, inflows")
    //     // setNewInflows(inflows)
    //     // setNewMonths(months)
    //     // setCashflowLoaded(true)
    // }, [newInflows, newMonths])


    useEffect(() => {
        console.log("Initial-load Cashflow useEffect --> categories, inflows")
        setNewMonths(months)
        setCashflowLoaded(true)
    }, [inflows, months])


    useEffect(() => {
        console.log("Initial-load Cashflow useEffect --> categories, inflows")
        // setNewInflows(inflows)
        // setNewMonths(months)
        // setCashflowLoaded(true)
    }, [newMonths])

    {/*  PROPS OBJECTS  */}

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
            <div className="header-and-button-wrapper">
                <div className="page-header-wrapper">
                    <h1 className="page-header">CASH FLOWS</h1>
                </div>
                {userMadeChanges && 
                    <SavePageButton 
                        {...props}
                    />
                }
            </div>
            {/* <Graph /> */}
            <PaginatingContainer 
                {...props}
                fromCashflow={{...paginatingContainerProps}}
            />

        </div>
    )
}

export default withSnackbar(Cashflow)

