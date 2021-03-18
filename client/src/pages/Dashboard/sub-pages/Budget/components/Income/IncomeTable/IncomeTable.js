import { 
    Paper, 
    Table, 
    TableBody, 
    useMediaQuery,
    TableContainer, 
    AccordionDetails
} from '@material-ui/core';
import React, { useState } from 'react';
import IncomeRow from "../IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { pickColor } from "../../../../../../../modules/themeAndStyles"
import { useIncomeTableStyles } from "../styles/useIncomeStyles"


const IncomeTable = (props) => {

    /* -------------------------- PROPS -------------------------- */
    
    const { newIncomes } = props.fromBudget    

    /* -------------------------- STATE -------------------------- */

    const [incomingDeletion, setIncomingDeletion] = useState(false)
    const [annualToggled, setAnnualToggled] = useState(true)

    
    /* ----------------------- MEDIA QUERY ------------------------ */

    const onlyTwoCells = useMediaQuery('(max-width: 390px)', {noSsr: true})

    const propsHeaders = {
        annualToggled,
        setAnnualToggled,
        // textSize: textSize,
        // onlyTwoCells: onlyTwoCells
    }

    const classes = useIncomeTableStyles()

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
                            const rowColor = pickColor(index)
                            const propsForRows = {
                                setIncomingDeletion,
                                arrayIndex: index,
                                incomingDeletion,
                                annualToggled,
                                onlyTwoCells,
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


