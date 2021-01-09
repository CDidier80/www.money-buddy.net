import React, { useState, useEffect } from 'react';
import ExpenseNumberCell from "../Cells/ExpenseNumberCell"
import ExpenseTextCell  from "../Cells/ExpenseTextCell"
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useStyles } from "./styles/useStyles"
import { 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    IconButton
} from '@material-ui/core'



const ExpenseTable = (props) => {

    {/*  PROPS */}

    const { 
        renderExpAccordion,
        rerenderExpenseAccordian,
        categoryIndex,
    } = props

    const { expenses } = props.category

    const {
        setNewCategories,
        newCategories
    } = props.categoryHooks

    const {
        tick, 
        updateBudget
    } = props.budgetTicker


    {/*  FUNCTIONS */}
    const classes = useStyles()


    const handleDeleteExpense = (e) => {
        e.preventDefault()
        try {
            const expenseIndex = e.currentTarget.id
            let categoriesArrayCopy = newCategories
            let expenseItem = categoriesArrayCopy[categoryIndex]['expenses'][expenseIndex]['amount']
            categoriesArrayCopy[categoryIndex]['expenses'].splice(expenseIndex, 1)
            setNewCategories(categoriesArrayCopy)

            // full budget rerender only necessary if expense is not $0
            if (expenseItem === 0) {
                rerenderExpenseAccordian(!renderExpAccordion)
            } else {
                updateBudget(tick + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TableContainer className="tableContainer" component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {props.showExpenseDeleteIcons &&
                            <TableCell></TableCell>
                        }
                        <TableCell 
                            className={classes.columnHeader}>
                                Expense
                        </TableCell>
                        <TableCell 
                            className={classes.columnHeader} 
                            align="right"
                        >
                            Monthly Average
                        </TableCell>
                        <TableCell 
                            className={classes.columnHeader} 
                            align="right"
                        >
                            Annual
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expenseObj, index) => {
                        const { expense, amount } = expenseObj
                        const monthly = Math.round(amount/12)
                        return (
                            <TableRow key={`${index * -1}`}> 
                                {props.showExpenseDeleteIcons &&
                                    <TableCell>
                                        <IconButton
                                            className={classes.iconButton}
                                            onClick={(e) => handleDeleteExpense(e)}
                                            id={index}
                                        >
                                            <HighlightOffIcon 
                                                className={classes.deleteIcon} 
                                                fontSize="small"
                                            />
                                        </IconButton>
                                    </TableCell>
                                }
                                <ExpenseTextCell 
                                    align="right"
                                    {...props}
                                    expenseIndex={index}
                                    defaultValue={expense} 
                                />
                                <ExpenseNumberCell 
                                    {...props}
                                    align="right"
                                    expenseIndex={index}
                                    defaultValue={monthly} 
                                    isAnnual={false}
                                />
                                <ExpenseNumberCell 
                                    {...props}
                                    expenseIndex={index}
                                    defaultValue={amount} 
                                    isAnnual={true}
                                    align="right"
                                />
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ExpenseTable

