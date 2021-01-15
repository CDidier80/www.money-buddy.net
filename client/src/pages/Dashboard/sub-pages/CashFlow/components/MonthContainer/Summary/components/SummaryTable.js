import React, { useState, useEffect } from 'react';
import useStyles from "../../../styles/useStyles"
import { 
    AccordionDetails,
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow,
} from '@material-ui/core';



const SummaryTable = (props) => {
    
    {/* ---------------- PROPS ---------------- */}
    
    const { 
        totalInflow, 
        totalOutflow } = props.fromMonthContainer
    

    {/* ---------------- STATE ------------------*/}
    
    const [monthlyInflow, setMonthlyInflow] = useState(0)
    const [monthlyOutflow, setMonthlyOutflow] = useState(0)
    const [netCashflow, setNetCashflow] = useState(0)
    const [startingCash, setStartingCash] = useState(0)
    const [endingCash, setEndingCash] = useState(0)
    // const [savingsOrLoss, setSavingsOrLoss] = useState(0)


    {/* ---------------- useEffect ------------------*/}

    useEffect(() => {
        try {

            const formattedInflow = format(totalInflow)
            const formattedOutflow = format(totalOutflow)
            const rawCashflow = totalInflow - totalOutflow
            const formattedNet = format(rawCashflow)
            // const savingsBool = (rawCashflow >= 0)
            setMonthlyInflow(formattedInflow)
            setMonthlyOutflow(formattedOutflow)
            setNetCashflow(formattedNet)
            // setSaved(savingsBool)
        } catch (error) {
            console.log(error)
        }
    }, [totalInflow, totalOutflow])



    {/* ---------------- FUNCTIONS ------------------*/}

    // const classes = useStyles()

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
            number: monthlyInflow
        },
        {
            description: "Total Outflows",
            number: monthlyOutflow
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
                        // className={classes.table} 
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