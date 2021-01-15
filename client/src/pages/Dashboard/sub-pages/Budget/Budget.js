import React, { useState, useEffect } from 'react';
import IncomeAccordion from "./components/Income/IncomeAccordion/IncomeAccordion"
import ExpenseAccordion from "./components/Expenses/ExpenseAccordion/ExpenseAccordion"
import DoughnutChart from './components/DonutWidget/DoughnutChart'
import Summary from './components/SummaryChart/Summary'
import {initNamesTotals, initIncomeTotals} from "./modules/initFunctions"
import TitleAndSaveButton from "./components/TitleAndSaveButton/TitleAndSaveButton"
import "./styles/budget.css"


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

    const summaryProps = {
        totalExpenses, 
        totalIncome,
        toggleChanges,
        userMadeChanges
    }

    const propsDoughnut = {
        newCategories, 
        categoryNames,
        categoryTotals,
        toggleChanges,
        userMadeChanges
    }

    const propsTitleAndSave = {
        newIncomes,
        toggleChanges,
        newCategories,
    }


    return ( !budgetLoaded ? <div></div> :

        <div className="budget">
            <TitleAndSaveButton 
                {...props}
                fromBudget={{...propsTitleAndSave}}
            />
            <div className="top-flex">
                <Summary
                    {...props}
                    fromBudget={{...summaryProps}}
                />
                <DoughnutChart 
                    {...props}
                    fromBudget={{...propsDoughnut}}
                />
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

export default Budget



// one chef  has many ==> categories

// one category has many ==> recipes

