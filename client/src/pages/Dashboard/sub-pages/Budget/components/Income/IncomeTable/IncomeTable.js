import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles, 
    TableContainer, 
    AccordionDetails
} from '@material-ui/core';
import React, { useState } from 'react';
import IncomeRow from "../IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { offRowColor } from "../../../../universal-functions/styleFunctions"


const useStyles = makeStyles({
    table: {
        minWidth: "270px",
    },
    tableContainer: {
        maxWidth: "890px",
        margin: "auto"
    },
})


const IncomeTable = (props) => {
    

    const { newIncomes } = props.fromBudget    

    const [incomingDeletion, setIncomingDeletion] = useState(false)

    const classes = useStyles()


    return (
        <AccordionDetails>
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
                        />
                        {newIncomes.map((income, index) => {
                            const { source, amount } = income
                            const monthly = Math.round(amount / 12)
                            const rowColor = offRowColor(index)
                            const propsForRows = {
                                setIncomingDeletion,
                                arrayIndex: index,
                                incomingDeletion, 
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


