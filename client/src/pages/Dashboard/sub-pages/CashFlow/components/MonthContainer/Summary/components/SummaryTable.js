import React, { useState, useEffect } from 'react';
import FlowRows from "./FlowRows"
import CashRows from "./CashRows"
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

    // console.log(props)
    
    {/* ---------------- PROPS ---------------- */}
    
    const { 
        totalInflow, 
        totalOutflow 
    } = props.fromMonthContainer
    

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

    const useStyles = makeStyles({
        details :{
            margin: "auto",
            textAlign: "center",
            padding: "0",
        },
        tableContainter :{
            margin: "auto",
            width: "100%",
            padding: "5px"
        },
        row: {
            maxWidth: "95%"
        }
        
    })

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
                <Table 
                    // className={classes.table} 
                    size="small" 
                    aria-label="a dense table"
                >
                    <TableBody 
                        className={classes.tableBody}
                    >
                        <FlowRows 
                            fromSummaryTable={{...flowRowsProps}}
                        />
                        <CashRows 
                            fromSummaryTable={{...cashRowsProps}}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>

    )
}

export default SummaryTable