import React, { useState, useEffect } from 'react'
import FlowRows from './FlowRows'
import CashRows from './CashRows'
import { makeSummaryTableStyles } from '../../styles/styles'
import { AccordionDetails, Paper, TableContainer, } from '@material-ui/core'

const SummaryTable = props => {

    const { cashReserves } = props.fromCashflowDevelopment
    const { totalInflow, totalOutflow } = props.fromMonthContainer
    const { monthIndex } = props.fromPaginatingContainer
    
    const [monthlyInflow, setMonthlyInflow] = useState(0)
    const [monthlyOutflow, setMonthlyOutflow] = useState(0)
    const [netCashflow, setNetCashflow] = useState(0)
    const [startingCash, setStartingCash] = useState(0)
    const [endingCash, setEndingCash] = useState(0)

    useEffect(() => {
        try {
            const formattedInflow = format(totalInflow)
            const formattedOutflow = format(totalOutflow)
            const rawCashflow = totalInflow - totalOutflow
            const formattedNet = format(rawCashflow)
            setMonthlyInflow(formattedInflow)
            setMonthlyOutflow(formattedOutflow)
            setNetCashflow(formattedNet)

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

    const classes = makeSummaryTableStyles(props.theme)

    const format = (value) => {
        let formattedValue = value.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
        return formattedValue
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
                    fromSummaryTable={
                        { 
                            monthlyInflow,
                            monthlyOutflow,
                            netCashflow
                        }
                    }
                />
                <CashRows fromSummaryTable={{...cashRowsProps}} />
            </TableContainer>
        </AccordionDetails>

    )
}

export default SummaryTable