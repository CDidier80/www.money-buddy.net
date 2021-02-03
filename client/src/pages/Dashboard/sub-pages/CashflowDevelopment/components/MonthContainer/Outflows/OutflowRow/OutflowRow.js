import { formatToCurrency } from "../../../../modules/cellFunctions"
import { makeStyles, TableRow, TableCell} from '@material-ui/core'
import IconCell from "../Cells/IconCell/IconCell"
import React, {useEffect, useState} from 'react'


const OutflowRow = (props) => {

    
    /* -------------------------- PROPS ------------------------- */

    const {
        showOutflowDeleteIcons
    } = props.fromFlowcategoryAccordion

    const {
        flowcategoryIndex
    } = props.fromOutflowsAccordion

    const {
        amount, 
        outflow,
        rowColor,
        outflowIndex,
        incomingDeletion, 
        setIncomingDeletion,
    } = props.fromOutflowsTable


    /* -------------------------- STATE ------------------------- */

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    /* -------------------------- useEffects ------------------------- */


    useEffect(() => {
        const anIconWasActivated = (showOutflowDeleteIcons | showUndoIcon) == true 
        // console.log('an icon was activated', anIconWasActivated)
        if (anIconWasActivated && iconShouldShow == false) {
            console.log("setting icon should should show to true")

                setIconShouldShow(true)
        } else {
            // console.log("setting icon should show to false")
            setIconShouldShow(false)
        }
    }, [showOutflowDeleteIcons, showUndoIcon])



    /* ----------------------- FUNCTIONS ---------------------- */

    const useStyles = makeStyles({
        row: {
            backgroundColor: rowColor
        },
        cell : {
            padding: "8px",
            color: "black",
            fontWeight: 500,
            fontSize: "12px",
            overflowWrap: "break-word",
        }
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
