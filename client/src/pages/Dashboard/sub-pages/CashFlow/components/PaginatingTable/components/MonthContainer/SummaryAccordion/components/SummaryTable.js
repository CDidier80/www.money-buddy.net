import React, { useState, useEffect } from 'react';
import "../styles/summary.css"
import useStyles from "../../../../styles/useStyles"
import { 
    AccordionDetails,
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow,
    AccordionDetails
} from '@material-ui/core';



const SummaryTable = (props) => {
    
    {/*  PROPS */}
    
    const { totalExpenses, totalIncome } = props
    
    {/*  STATE */}

    const [totalInflows, setTotalInflows] = useState(0)
    const [totalOuflows, setTotalOutflows] = useState(0)
    const [netCashflow, setNetCashflow] = useState(0)

    const [startingCash, setStartingCash] = useState(0)
    const [endingCash, setEndingCash] = useState(0)

    // const [moExpenses, setMoExpenses] = useState(0)
    // const [expenses, setExpenses] = useState(0)

    // const [savingsOrLoss, setSavingsOrLoss] = useState(0)
    // const [monthlySavingsOrLoss, setMonthlySavingsOrLoss] = useState(0)


    {/*  FUNCTIONS */}

    // useEffect(() => {
    //     try {

    //         const ai = totalIncome[0]
    //         const mi = totalIncome[1]

    //         const ae = totalExpenses[0]
    //         const me = totalExpenses[1]

    //         const formattedIncome = format(ai)
    //         const monthlyFormattedIncome = format(mi)
    //         const formattedExpenses = format(ae)
    //         const monthlyFormattedExpenses = format(me)
    
    //         const formattedNet = format((ai - ae))
    //         const formattedMonthlyNet = format((mi - me))

    //         const savingsBool = (ai - ae >= 0)

    //         setMoIncome(monthlyFormattedIncome)
    //         setIncome(formattedIncome)
    //         setExpenses(formattedExpenses)
    //         setMoExpenses(monthlyFormattedExpenses)
    //         setSavingsOrLoss(formattedNet)
    //         setMonthlySavingsOrLoss(formattedMonthlyNet)
    //         setSaved(savingsBool)

            
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }, [totalIncome[0], totalExpenses[0]])



    const classes = useStyles()


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

    const rows = [
        {
            description: "Total Inflows",
            number: totalInflows
        },
        {
            description: "Total Outflows",
            number: totalOutflows
        },
        {
            description: "Net Cashflow",
            number: netCashflow
        },
        {
            description: "Starting Cash",
            number: 0
        },
        {
            description: "Ending Cash",
            number: 0
        },
    ]

    return (
        <AccordionDetails>
            <div className="summary placeholder left">
                <h3 className="widget-header distribution-header">Month</h3>
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
                            {rows.forEach((row) => {
                                const {description, number} = row
                                return (
                                    <TableRow>
                                        <TableCell>
                                            <h5 className="summary-text">
                                                { description } 
                                            </h5>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>
                                                { number }
                                            </h5>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        </AccordionDetails>

    )
}

export default SummaryTable