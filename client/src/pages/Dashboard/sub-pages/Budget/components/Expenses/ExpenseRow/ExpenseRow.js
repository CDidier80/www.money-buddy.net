import React, { useEffect, useState } from 'react'
import ExpenseNumberCell from '../Cells/ExpenseNumberCell'
import ExpenseTextCell  from '../Cells/ExpenseTextCell'
import DeleteExpenseIcon from './components/DeleteExpenseIcon'
// import UndoIcon from './components/UndoIcon'
import { 
    makeStyles, 
    TableCell, 
    TableRow,
    Fade
} from '@material-ui/core'


const ExpenseRow = props => {

    const {
        showExpenseDeleteIcons
    } = props.fromCategoryAccordion

    const {
        expense,
        amount, 
        monthly,
        rowColor
    } = props.fromExpenseTable

    const [ showUndoIcon, ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)

    useEffect(() => {
        const anIconWasActivated = (showExpenseDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showExpenseDeleteIcons, showUndoIcon])

    const useStyles = makeStyles( theme => {

        return ({
            row: {
                height: '38px',
                maxHeight: '38px',
                backgroundColor: rowColor
            },
            iconCell: {
                maxWidth: '36px',
                padding: '0px'
            },
            iconButton: {
                marginRight: '11px',
                '&:hover' : {
                    backgroundColor: '#ffcece65'
                }
            },
            deleteIcon: {
                color: 'red',
                fontSize: '13px'
            },
            undoIcon: {
                color: 'lightgray',
            }
        })
    })

    const classes = useStyles(props.theme)

    const propsForExpense = {
        defaultValue: expense
    }

    const propsForMonthly = {
        defaultValue: monthly,
        isAnnual: false
    }

    const propsForAnnual = {
        defaultValue: amount,
        isAnnual: true
    }

    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size='small' 
                className={classes.iconCell}
                style={{width: '30px'}}
            >

                { showExpenseDeleteIcons && (
                    <Fade in={iconShouldShow}>
                            <DeleteExpenseIcon { ...props } />
                    </Fade>
                )}
            </TableCell>
            <ExpenseTextCell 
                align='right'
                { ...props }
                fromExpenseRow={{...propsForExpense}}
            />
            <ExpenseNumberCell 
                { ...props }
                align='right'
                fromExpenseRow={{...propsForMonthly}}
            />
            <ExpenseNumberCell 
                { ...props }
                fromExpenseRow={{...propsForAnnual}}
                align='right'
            />
        </TableRow>
    )
}

export default ExpenseRow
