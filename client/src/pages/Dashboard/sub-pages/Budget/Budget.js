import React, { useState, useEffect } from 'react';
import IncomeAccordion from "./components/Income/Accordion/IncomeAccordion"
import ExpenseAccordion from "./components/Expenses/ExpenseAccordion/ExpenseAccordion"
import DoughnutChart from './components/SpendingDistribution/DoughnutChart'
import Summary from './components/Summary/Summary'
import "./styles/budget.css"
import {initNamesTotals, initIncomeTotals} from "./modules/initFunctions"
import { useSnackbar, withSnackbar } from 'notistack';


const Budget = (props) => {

    {/*  PROPS */}

    const { 
        incomes, 
        budgetId, 
        categories, 
        sendBudgetToDB
    } = props.budgetHooks
    

    {/*  STATE  */}

    const [budgetLoaded, setBudgetLoaded] = useState(false)
    const [tick, updateBudget] = useState(0)
    const [userMadeChanges, toggleChanges] = useState(false)
    const [newIncomes, setNewIncomes] = useState([])
    const [newCategories, setNewCategories] = useState([])
    const [categoryNames, setCategoryNames] = useState([])
    const [categoryTotals, setCategoryTotals] = useState([])
    const [totalExpenses, setTotalExpenses] = useState([])
    const [totalIncome, setTotalIncome] = useState([])


    {/*  useEffects  */}

    // initial page load where state is set by dashboard budget data
    useEffect(() => {
        // console.log("Initial-load Budget useEffect --> categories, incomes")
        console.log(categories, incomes)
        const catState =  initNamesTotals(categories)
        const incomeState =  initIncomeTotals(incomes)

        setCategoryNames(catState[0])
        setCategoryTotals(catState[1])
        setTotalExpenses(catState[2])
        setTotalIncome(incomeState)
        setNewIncomes(incomes)
        setNewCategories(categories)
        setBudgetLoaded(true)
    }, [])


    // reloads in which local state changes require recalc of totals, names
    useEffect(() => {
        if(budgetLoaded) {
            // console.log("Budget.js useEffect reload triggered")
            const catState =  initNamesTotals(newCategories)
            const incomeState =  initIncomeTotals(newIncomes)
            setCategoryNames(catState[0])
            setCategoryTotals(catState[1])
            setTotalExpenses(catState[2])
            setTotalIncome(incomeState)
        }
    }, [
        tick,
        userMadeChanges,
    ])


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




    const saveBudget = async (e) => {
        try {
            e.preventDefault()
            const payload = {
                budgetId: budgetId,
                incomes: newIncomes,
                categories: newCategories,
            }
            await sendBudgetToDB(payload)
            toggleChanges(false)
            budgetSavedSnackbar()
        } catch (error) {
            failedBudgetSaveSnackbar()
            console.log("budget update failed: ", error)
        }
    }


    const handleRerender = (e) => {
        updateBudget(tick + 1)
    }


    {/*  PROPS OBJECTS  */}

    const incomeAccordionProps = {
        newIncomes,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
        updateBudget, 
        tick
    }


    const expenseAccordionProps = {
        newCategories,
        setNewCategories, 
        toggleChanges,
        userMadeChanges,
        updateBudget, 
        tick
    }


    const userChanges = {
        toggleChanges,
        userMadeChanges,
    }


    return ( !budgetLoaded ? <div></div> :

        <div className="budget">
            <div className="header-and-button-wrapper">
                <div className="page-header-wrapper">
                    <h1 className="page-header">BUDGET</h1>
                </div>
                {userMadeChanges && 
                    <button 
                        className="save-budget-button"
                        onClick={(e) => saveBudget(e)}
                    >
                        Save
                    </button>
                }
            </div>
            <div className="top-flex">
                <div className="budget-top-widgets left">
                    <Summary
                        totalExpenses={totalExpenses}
                        totalIncome={totalIncome}
                        userChanges={userChanges}
                    />
                </div>
                <div className="budget-top-widgets right">
                    <h3 className="widget-header distribution-header">Distribution of Spending</h3>
                    <DoughnutChart 
                        newCategories={newCategories} 
                        categoryNames={categoryNames}
                        categoryTotals={categoryTotals}
                        userChanges={userChanges}
                    />
                </div>
            </div>
            <IncomeAccordion 
                fromBudget={incomeAccordionProps}
            />
            <ExpenseAccordion 
                fromBudget={{...expenseAccordionProps}}
            />
        </div>
    )
}

export default withSnackbar(Budget)



// one chef  has many ==> categories

// one category has many ==> recipes

