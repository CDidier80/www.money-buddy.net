import { currencyFormat } from "../../../../../universal-functions/cellFormatting"
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
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

    /* ------------------------ useEffect ------------------------*/

    useEffect(() => {
            const ai = totalIncome[0]
            const mi = totalIncome[1]
            const ae = totalExpenses[0]
            const me = totalExpenses[1]

            const formattedIncome = currencyFormat(ai)
            const formattedExpenses = currencyFormat(ae)
            const formattedNet = currencyFormat((ai - ae))
            const monthlyFormattedIncome = currencyFormat(mi)
            const monthlyFormattedExpenses = currencyFormat(me)
            const formattedMonthlyNet = currencyFormat((mi - me))

            const savingsBool = (ai - ae >= 0)

            setSaved(savingsBool)
            setIncome(formattedIncome)
            setExpenses(formattedExpenses)
            setSavingsOrLoss(formattedNet)
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
            cellOneClass: "summary-text lato",
            cellTwoClass: "summary-numbers",
            cellOneContent: "Net Income",
            cellTwoContent: (monthly ? moIncome : income)
        },
        {
            cellOneClass: "summary-text lato",
            cellTwoClass: "summary-numbers",
            cellOneContent: "Net Expenses",
            cellTwoContent: (monthly ? moExpenses : expenses)
        },
        {
            cellOneClass: "summary-text lato",
            cellTwoClass: (`summary-numbers ${saved ? "savings" : "loss"}`),
            cellOneContent: (saved ? "Net Savings" : "Net Loss"),
            cellTwoContent: (monthly ? monthlySavingsOrLoss : savingsOrLoss)
        },
    ]

    const useRowStyles = makeStyles({
        0: { backgroundColor: "rgba(159, 255, 159, .4)" },
        1: { backgroundColor: "rgba(255, 176, 176, .4)" },
        2: { backgroundColor: "rgba(180, 255, 255, .4)" }
    })

    const rowColors = useRowStyles()

    /* ----------------- JSX -----------------*/

    return <RowsJsx {...props} data={data} rowColors={rowColors} />
}


export default RowLogic
