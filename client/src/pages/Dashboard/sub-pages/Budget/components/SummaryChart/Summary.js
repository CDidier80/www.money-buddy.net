import React, { useState, useEffect } from 'react';
import "./styles/summary.css"
import useStyles from "./styles/useStyles"
import { 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow,
    Button,
    ButtonGroup
} from '@material-ui/core';



const Summary = (props) => {
    
    {/*  PROPS */}
    
    const { totalExpenses, totalIncome } = props.fromBudget
    
    {/*  STATE */}

    const [monthly, setMonthly] = useState(false)
    const [saved, setSaved] = useState(null)

    const [moIncome, setMoIncome] = useState(0)
    const [income, setIncome] = useState(0)

    const [moExpenses, setMoExpenses] = useState(0)
    const [expenses, setExpenses] = useState(0)

    const [savingsOrLoss, setSavingsOrLoss] = useState(0)
    const [monthlySavingsOrLoss, setMonthlySavingsOrLoss] = useState(0)


    {/*  FUNCTIONS */}

    useEffect(() => {
        try {

            const ai = totalIncome[0]
            const mi = totalIncome[1]

            const ae = totalExpenses[0]
            const me = totalExpenses[1]

            const formattedIncome = format(ai)
            const monthlyFormattedIncome = format(mi)
            const formattedExpenses = format(ae)
            const monthlyFormattedExpenses = format(me)
    
            const formattedNet = format((ai - ae))
            const formattedMonthlyNet = format((mi - me))

            const savingsBool = (ai - ae >= 0)

            setMoIncome(monthlyFormattedIncome)
            setIncome(formattedIncome)
            setExpenses(formattedExpenses)
            setMoExpenses(monthlyFormattedExpenses)
            setSavingsOrLoss(formattedNet)
            setMonthlySavingsOrLoss(formattedMonthlyNet)
            setSaved(savingsBool)

            
        } catch (error) {
            console.log(error)
        }
        
    }, [totalIncome[0], totalExpenses[0]])



    const classes = useStyles()

    const switchToMonthly = (e) => {
        e.preventDefault()
        console.log("monthly clicked")
        if (!monthly) {
            setMonthly(true)
        }
    }

    const switchToAnnually = (e) => {
        e.preventDefault()
        console.log("annually clicked")
        if (monthly) {
            setMonthly(false)
        }
    }

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

    return (
        <div className="budget-top-widgets left">
            <div className="summary placeholder left">
                <h3 className="widget-header distribution-header">Summary</h3>
                <TableContainer 
                    className="tableContainer" 
                    component={Paper}
                >
                    <Table 
                        className={classes.table} 
                        // size="small" 
                        aria-label="a dense table"
                    >
                        <TableBody>
                            <TableRow>

                                <TableCell>
                                    <h5 className="summary-text">
                                        Net Income
                                    </h5>
                                </TableCell>
                                <TableCell align="right">
                                    <h5>
                                        {monthly ? moIncome : income}
                                    </h5>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <h5 className="summary-text">
                                        Net Expenses
                                    </h5>
                                </TableCell>
                                <TableCell align="right">
                                    <h5 className="summary-text">
                                        {monthly ? moExpenses : expenses}
                                        
                                    </h5>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <h5 className="summary-text">
                                        {saved ? "Net Savings" : "Net Loss"}
                                    </h5>
                                </TableCell>
                                <TableCell align="right">
                                    <h5 className={saved ? "savings-text" : "loss-text"}>
                                        {monthly ? monthlySavingsOrLoss : savingsOrLoss}
                                    </h5>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

                    <ButtonGroup className={classes.buttonGroup} 
                        variant="text" 
                        color="primary" 
                        aria-label="text primary button group"
                    >
                        <Button 
                            className={!monthly ? classes.activeButton : classes.inactiveButton}
                            onClick={(e) => switchToAnnually(e)}
                        >
                            Annual
                        </Button>
                        <Button 
                            className={monthly ? classes.activeButton : classes.inactiveButton}
                            onClick={(e) => switchToMonthly(e)}
                        >
                            Monthly
                        </Button>
                    </ButtonGroup>
            </div>

        </div>

    )
}

export default Summary