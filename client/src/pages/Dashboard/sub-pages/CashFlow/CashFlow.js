import React, { useState, useEffect } from 'react';
import { useSnackbar, withSnackbar } from 'notistack';
import PaginatingContainer from "./components/PaginatingContainer/PaginatingContainer"
import { initTotalInflow, initTotalOutflow } from "./modules/initFunctions"
import SavePageButton from './components/SavePageButton';
import "./styles/CashFlow.css"

const Cashflow = (props) => {

    {/*  PROPS */}


    {/*  STATE  */}

    const [cashflowLoaded, setCashflowLoaded] = useState(false)
    const [tick, updateCashflow] = useState(0)
    const [userMadeChanges, toggleChanges] = useState(false)
    const [newInflows, setNewInflows] = useState([])
    const [newCategories, setNewCategories] = useState([])
    // const [categoryNames, setCategoryNames] = useState([])
    const [totalOutflow, setTotalOutflow] = useState(0)
    const [totalInflow, setTotalInflow] = useState(0)


    {/*  useEffects  */}

    // initial page load where state is set by dashboard Cashflow data
    useEffect(() => {
        console.log("Initial-load Cashflow useEffect --> categories, inflows")
        console.log(categories, inflows)
        const newTotalOutflow =  initTotalOutflow(categories)
        const newTotalInflow =  initTotalInflow(inflows)
        setTotalOutflow(newTotalOutflow)
        setTotalInflow(newTotalInflow)
        setNewInflows(inflows)
        setNewCategories(categories)
        setCashflowLoaded(true)
    }, [])


    // reloads in which local state changes require recalc of totals, names
    useEffect(() => {
        if(cashflowLoaded) {
            // console.log("Cashflow.js useEffect reload triggered")
            const newTotalOutflow =  initTotalOutflow(categories)
            const newTotalInflow =  initTotalInflow(inflows)
            setTotalOutflows(newTotalOutflow)
            setTotalInflows(newTotalInflow)
        }
    }, [
        tick,
        userMadeChanges,
    ])

   



    {/*  PROPS OBJECTS  */}

    const paginatingContainerProps = { 
        newInflows,
        totalInflow,
        totalOutflow,
        newCategories,
        setNewCategories,
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

