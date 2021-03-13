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



const ExpenseTable = (props) => {

    {/*  PROPS */}

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
                            const rowColor = (index % 2 === 0) ? "rgb(245, 255, 255)" : "rgba(255, 253, 245)"
                            const propsForRows = {
                                key: `${index * -1}`,
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

