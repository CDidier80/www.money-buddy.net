import { formatToCurrency } from "../../../../modules/cellFunctions"
import { makeStyles, TableRow, TableCell} from '@material-ui/core'
import IconCell from "../Cells/IconCell/IconCell"
import React, {useEffect, useState} from 'react'

const OutflowRow = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const {
        amount, 
        outflow,
        rowColor,
        outflowIndex,
        incomingDeletion, 
        setIncomingDeletion,
    } = props.fromOutflowsTable
    const { flowcategoryIndex } = props.fromOutflowsAccordion
    const { showOutflowDeleteIcons } = props.fromFlowcategoryAccordion


    /* -------------------------- STATE ------------------------- */

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)

    /* -------------------------- useEffects ------------------------- */


    useEffect(() => {
        const anIconWasActivated = (showOutflowDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showOutflowDeleteIcons, showUndoIcon])

    /* ----------------------- FUNCTIONS ---------------------- */

    const useStyles = makeStyles({
        cell : {
            padding: "8px",
            color: "black",
            fontWeight: 500,
            fontSize: "12px",
            overflowWrap: "break-word",
        },
        row: { backgroundColor: rowColor },
    })

    const classes = useStyles()


    /* -------------------- PROPS FOR CHILDREN ------------------- */

    const propsForIconCell= {
        showUndoIcon,
        iconShouldShow, 
        setShowUndoIcon,
        setIconShouldShow 
    }

    /* ----------------------- JSX ---------------------- */

    return (
        <TableRow
            className={classes.row}
        >
            <IconCell 
                {...props}
                fromOutflowRow={{...propsForIconCell}}
            />
            <TableCell
                className={classes.cell}
                align="right"
            >
                {outflow}
            </TableCell>
            <TableCell 
                className={classes.cell}
                align="right"
            >
                {formatToCurrency(amount)}
            </TableCell>
        </TableRow>
    )
}

export default OutflowRow
