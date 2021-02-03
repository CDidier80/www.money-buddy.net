import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles, 
    useMediaQuery,
    TableContainer, 
    AccordionDetails
} from '@material-ui/core';
import React, { useState } from 'react';
import IncomeRow from "../IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { offRowColor } from "../../../../universal-functions/styleFunctions"




const IncomeTable = (props) => {
    
    
    const { newIncomes } = props.fromBudget    
    
    const [incomingDeletion, setIncomingDeletion] = useState(false)
    const [annualToggled, setAnnualToggled] = useState(true)

    
    /* -------------------------- MEDIA QUERY -------------------------- */
    
    const small = useMediaQuery('(max-width: 725px)', {noSsr: true})
    const verySmall = useMediaQuery('(max-width: 460px)', {noSsr: true})
    const onlyTwoCells = useMediaQuery('(max-width: 390px)', {noSsr: true})

    
    const createTextStyle = () => {
        let fontSize 
        let styleObject = {
            paddingLeft: 0,
            paddingRight: 0
        }
        switch (true) {
            case verySmall: 
            fontSize = {fontSize: "10px"}
            break
            case small: 
            fontSize = {fontSize: "12px"}
            break 
            default: 
            fontSize =  {}
        }
        return {...styleObject, ...fontSize}
    }
    

    const padding = verySmall ? {padding: "6px"} : {}
    const overflow = verySmall ? {overflowX: "hidden"} : {}

    const useStyles = makeStyles({
        accordionDetails: {
            ...padding,
            ...overflow

        },
        table: {
            minWidth: "270px",
            ...overflow
        },
        tableContainer: {
            maxWidth: "890px",
            margin: "auto",
            ...overflow

        },
    })
    const classes = useStyles()

    const textSize = small ? createTextStyle() : {}

    const propsHeaders = {
        annualToggled,
        setAnnualToggled,
        textSize: textSize,
        onlyTwoCells: onlyTwoCells
    }

    return (
        <AccordionDetails
        className={classes.accordionDetails}
        >
            <TableContainer 
                className={classes.tableContainer}
                component={Paper}
            >
                <Table 
                    className={classes.table} 
                    size="small" 
                >
                    <TableBody>
                        <IncomeHeaders 
                            {...props}
                            {...propsHeaders}
                        />
                        {newIncomes.map((income, index) => {
                            const { source, amount } = income
                            const monthly = Math.round(amount / 12)
                            const rowColor = offRowColor(index)
                            const propsForRows = {
                                setIncomingDeletion,
                                arrayIndex: index,
                                incomingDeletion,
                                annualToggled,
                                onlyTwoCells,
                                textSize, 
                                rowColor,
                                monthly,
                                source,
                                amount, 
                            }
                            return (
                                <IncomeRow 
                                    fromIncomeTable={{...propsForRows}}
                                    key={index + 100000}
                                    {...props}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default IncomeTable


