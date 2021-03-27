import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    AccordionDetails
} from '@material-ui/core'
import React, { useState } from 'react';
import { useStyles } from "./styles/useStyles"
import ExpenseRow from "../ExpenseRow/ExpenseRow"
import ExpenseHeaders from "./components/ExpenseHeaders"
import { pickColor } from "../../../../../../../modules/themeAndStyles"



const ExpenseTable = (props) => {

    /*  PROPS */

    const { category } = props.fromExpenseAccordion

    const { expenses } = category


     {/*  STATE */}

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    {/*  FUNCTIONS */}

    const classes = useStyles()

    return (
        <AccordionDetails>
            <TableContainer 
                className="tableContainer" 
                component={Paper}
            >
                <Table 
                    className={classes.table} 
                    size="small" 
                    aria-label="a dense table"
                >
                    <TableBody>
                        <ExpenseHeaders {...props} />
                        {expenses.map((expenseObj, index) => {
                            const { expense, amount } = expenseObj
                            const monthly = Math.round(amount/12)
                            const rowColor = pickColor(index)
                            const propsForRows = {
                                expenseIndex: index,
                                setIncomingDeletion,
                                incomingDeletion, 
                                rowColor,
                                expense,
                                monthly,
                                amount, 
                            }
                            return (
                                <ExpenseRow 
                                    {...props}
                                    key={`expense-row-${index}`}
                                    fromExpenseTable={{...propsForRows}}
                                /> 
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default ExpenseTable

