import React, { useState, useEffect } from 'react';
import FlowRows from "./FlowRows"
import CashRows from "./CashRows"
import { makeSummaryTableStyles } from "../../styles/styles"
import { 
    AccordionDetails,
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    makeStyles
} from '@material-ui/core';



const SummaryTable = (props) => {

    
    {/* ---------------- PROPS ---------------- */}
    
    const { 
        newMonths,
        inflows,
        outflows, 
        cashReserves
    } = props

    
    const { 
        totalInflow, 
        totalOutflow 
    } = props
    
    const { monthIndex } = props

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

            if (monthIndex === 0){
                const formattedStartingCash = format(1000)
                const formattedEndingCash = format(cashReserves[0])
                setStartingCash(formattedStartingCash)
                setEndingCash(formattedEndingCash)
                
            } else {
                const formattedStartingCash = format(cashReserves[monthIndex - 1])
                const formattedEndingCash = format(cashReserves[monthIndex])
                setStartingCash(formattedStartingCash)
                setEndingCash(formattedEndingCash)
            }
        } catch (error) {
            console.log(error)
        }
    }, [totalInflow, totalOutflow])



    {/* ---------------- FUNCTIONS ------------------*/}


    const classes = makeSummaryTableStyles(props.theme)

    const format = (value) => {

        let formattedValue = value.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0, 
        })
        return formattedValue
    }



    const flowRowsProps = {
        monthlyInflow,
        monthlyOutflow,
        netCashflow
    }

    const cashRowsProps = {
        startingCash,
        endingCash
    }


    return (
        <AccordionDetails 
            className={classes.details}
        >
            <TableContainer 
                className={classes.tableContainter}
                component={Paper}
            >
                <FlowRows 
                    fromSummaryTable={{...flowRowsProps}}
                />
                <CashRows 
                    fromSummaryTable={{...cashRowsProps}}
                />
            </TableContainer>
        </AccordionDetails>

    )
}

export default SummaryTable