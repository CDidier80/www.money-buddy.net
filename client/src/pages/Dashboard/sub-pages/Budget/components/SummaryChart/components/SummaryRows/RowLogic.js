import React, {useState, useEffect} from 'react'
import RowsJsx from "./RowsJsx"

const RowLogic = (props) => {

    /* ------------------------ PROPS ------------------------*/

    const { monthly } = props.fromSummary
    const { totalExpenses, totalIncome } = props.fromBudget


    /* ------------------------ STATE ------------------------*/

    const [saved, setSaved] = useState(null)
    const [income, setIncome] = useState(0)
    const [moIncome, setMoIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [moExpenses, setMoExpenses] = useState(0)
    const [savingsOrLoss, setSavingsOrLoss] = useState(0)
    const [monthlySavingsOrLoss, setMonthlySavingsOrLoss] = useState(0)


    /* ------------------------ FUNCTIONS ------------------------*/

    const format = (value) => {

        let formattedValue = value.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0, 
        })
        if (value < 0){
            formattedValue = "-" + formattedValue
        }
        return formattedValue
    }


    /* ------------------------ useEffect ------------------------*/

    useEffect(() => {
            const ai = totalIncome[0]
            const ae = totalExpenses[0]
            const mi = totalIncome[1]
            const me = totalExpenses[1]

            const formattedIncome = format(ai)
            const formattedExpenses = format(ae)
            const monthlyFormattedIncome = format(mi)
            const monthlyFormattedExpenses = format(me)
            const formattedNet        = format((ai - ae))
            const formattedMonthlyNet  = format((mi - me))

            const savingsBool = (ai - ae >= 0)

            setSaved(savingsBool)
            setIncome(formattedIncome)
            setSavingsOrLoss(formattedNet)
            setExpenses(formattedExpenses)
            setMoIncome(monthlyFormattedIncome)
            setMoExpenses(monthlyFormattedExpenses)
            setMonthlySavingsOrLoss(formattedMonthlyNet)
    }, [
        totalIncome[0], 
        totalExpenses[0]
    ])


    /* ------------------------ Cell Data ------------------------*/

    const data = [
        {
            cellOneClass: "summary-text",
            cellTwoClass: "",
            cellOneContent: "Net Income",
            cellTwoContent: (monthly ? moIncome : income)
        },
        {
            cellOneClass: "summary-text",
            cellTwoClass: "",
            cellOneContent: "Net Expenses",
            cellTwoContent: (monthly ? moExpenses : expenses)
        },
        {
            cellOneClass: "summary-text",
            cellTwoClass: (saved ? "savings-text" : "loss-text"),
            cellOneContent: (saved ? "Net Savings" : "Net Loss"),
            cellTwoContent: (monthly ? monthlySavingsOrLoss : savingsOrLoss)
        },
    ]

    /* ----------------- JSX -----------------*/

    return <RowsJsx data={data} {...props} />
}


export default RowLogic
