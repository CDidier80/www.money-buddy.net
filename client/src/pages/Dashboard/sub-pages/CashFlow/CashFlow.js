import React, { useState, useEffect } from 'react';
import "./styles/CashFlow.css"
import { useSnackbar, withSnackbar } from 'notistack';


const Cashflow = (props) => {

    {/*  PROPS */}


    {/*  STATE  */}

    const [cashflowLoaded, setCashflowLoaded] = useState(false)
    const [tick, updateCashflow] = useState(0)
    const [userMadeChanges, toggleChanges] = useState(false)
    // const [newIncomes, setNewIncomes] = useState([])
    // const [newCategories, setNewCategories] = useState([])
    // const [categoryNames, setCategoryNames] = useState([])
    // const [categoryTotals, setCategoryTotals] = useState([])
    // const [totalExpenses, setTotalExpenses] = useState([])
    // const [totalIncome, setTotalIncome] = useState([])


    {/*  useEffects  */}

    // initial page load where state is set by dashboard budget data
    useEffect(() => {
        // console.log("Initial-load Budget useEffect --> categories, incomes")
        // console.log(categories, incomes)
        // const catState =  initNamesTotals(categories)
        // const incomeState =  initIncomeTotals(incomes)

        // setCategoryNames(catState[0])
        // setCategoryTotals(catState[1])
        // setTotalExpenses(catState[2])
        // setTotalIncome(incomeState)
        // setNewIncomes(incomes)
        // setNewCategories(categories)
        setCashflowLoaded(true)
    }, [])


    // reloads in which local state changes require recalc of totals, names
    // useEffect(() => {
    //     if(budgetLoaded) {
    //         // console.log("Budget.js useEffect reload triggered")
    //         const catState =  initNamesTotals(newCategories)
    //         const incomeState =  initIncomeTotals(newIncomes)
    //         setCategoryNames(catState[0])
    //         setCategoryTotals(catState[1])
    //         setTotalExpenses(catState[2])
    //         setTotalIncome(incomeState)
    //     }
    // }, [
    //     tick,
    //     userMadeChanges,
    // ])


    {/*  FUNCTIONS  */}

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const budgetSavedSnackbar = () => {
        enqueueSnackbar(`Budget Saved`, {
            variant: 'Success', 
            iconVariant: "Success"
        })
    }
    
    const failedBudgetSaveSnackbar = () => {
        enqueueSnackbar(`Failed to Save Changes`, {variant: 'Error'})
    }



    {/*  PROPS OBJECTS  */}




    return ( !updateCashflow ? <div></div> :

        <div className="cashflow">
            <div className="header-and-button-wrapper">
                <div className="page-header-wrapper">
                    <h1 className="page-header">CASH FLOWS</h1>
                </div>
                {userMadeChanges && 
                    <button 
                        className="save-budget-button"
                        // onClick={(e) => saveCashflows(e)}
                    >
                        Save
                    </button>
                }
            </div>
            <div className="top-flex">
                <div className="budget-top-widgets left">

                </div>
                <div className="budget-top-widgets right">
                    <h3 className="widget-header distribution-header"></h3>
                </div>
            </div>
        </div>
    )
}

export default withSnackbar(Cashflow)

