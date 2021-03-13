import {
    initNamesTotals, 
    initIncomeTotals
} from "./modules/initFunctions"
import ExpenseAccordion   from "./components/Expenses/ExpenseAccordion/ExpenseAccordion"
import TitleAndSaveButton from "./components/TitleAndSaveButton/TitleAndSaveButton"
import IncomeAccordion    from "./components/Income/IncomeAccordion/IncomeAccordion"
import DoughnutChart      from './components/DonutWidget/DoughnutChart'
import Summary            from './components/SummaryChart/Summary'
import React, { 
    useState, 
    useEffect,
    useRef 
} from 'react';
import "./styles/budget.css"


const Budget = (props) => {

    /* ----------------------- PROPS ------------------------ */

    const { 
        incomes, 
        categories, 
    } = props.budgetHooks
    

    /* ----------------------- STATE ------------------------ */

    const [tick, updateBudget] = useState(0)
    const [newIncomes, setNewIncomes] = useState([])
    const [totalIncome, setTotalIncome] = useState([])
    const [totalExpenses, setTotalExpenses] = useState([])
    const [newCategories, setNewCategories] = useState([])
    const [categoryNames, setCategoryNames] = useState([])
    const [budgetLoaded, setBudgetLoaded] = useState(false)
    const [userMadeChanges, toggleChanges] = useState(false)
    const [categoryTotals, setCategoryTotals] = useState([])


    /* ----------------------- useEffects ------------------------ */


    /* init state from props */
    useEffect(() => {
        const catState = initNamesTotals(categories)
        const incomeState = initIncomeTotals(incomes)

        setBudgetLoaded(true)
        setNewIncomes(incomes)
        setTotalIncome(incomeState)
        setNewCategories(categories)
        setCategoryNames(catState[0])
        setTotalExpenses(catState[2])
        setCategoryTotals(catState[1])
    }, [])


    /* subsequent state updates */
    useEffect(() => {
        if(budgetLoaded) {
            const catState = initNamesTotals(newCategories)
            const incomeState = initIncomeTotals(newIncomes)
            setCategoryNames(catState[0])
            setCategoryTotals(catState[1])
            setTotalExpenses(catState[2])
            setTotalIncome(incomeState)
        }
    }, [
        tick,
        userMadeChanges,
    ])


    /* ----------------------- PROPS FOR CHILDEN ------------------------ */

    const forAll = {
        tick,
        updateBudget, 
        toggleChanges,
        userMadeChanges
    }

    const incomeAccordionProps = {
        ...forAll,
        newIncomes,
        setNewIncomes,
        userMadeChanges,
    }

    const expenseAccordionProps = {
        ...forAll,
        updateBudget, 
        newCategories,
        setNewCategories, 
    }

    const summaryProps = {
        ...forAll,
        totalIncome,
        totalExpenses, 
    }

    const propsDoughnut = {
        ...forAll,
        newCategories, 
        categoryNames,
        categoryTotals,
    }

    const propsTitleAndSave = {
        ...forAll,
        newIncomes,
        newCategories,
    }

    const budgetRef = useRef()

    return ( !budgetLoaded ? <div></div> :

        <div className="budget" ref={budgetRef}>
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
                    budgetRef={budgetRef}
                    fromBudget={{...propsDoughnut}}
                />
            </div>
            <IncomeAccordion 
                {...props}
                fromBudget={incomeAccordionProps}
            />
            <ExpenseAccordion
                {...props} 
                fromBudget={{...expenseAccordionProps}}
            />
        </div>
    )
}

export default Budget


