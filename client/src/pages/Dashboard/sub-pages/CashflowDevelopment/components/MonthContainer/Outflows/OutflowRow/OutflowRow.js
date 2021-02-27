import { formatToCurrency } from "../../../../modules/cellFunctions"
import OutflowCell from "./components/OutflowCell"
import IconCell from "../Cells/IconCell/IconCell"
import React, {useEffect, useState} from 'react'
import { TableRow } from '@material-ui/core'

const OutflowRow = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const {
        amount, 
        outflow,
        rowColor,
        // outflowIndex,
        // incomingDeletion, 
        // setIncomingDeletion,
    } = props.fromOutflowsTable
    // const { flowcategoryIndex } = props.fromOutflowsAccordion
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


    /* -------------------- PROPS FOR CHILDREN ------------------- */

    const propsForIconCell= {
        ...props,
        showUndoIcon,
        iconShouldShow, 
        setShowUndoIcon,
        setIconShouldShow 
    }

    /* ----------------------- JSX ---------------------- */

    return (
        <TableRow
            style={{ backgroundColor: rowColor }}
        >
            <IconCell fromOutflowRow={{...propsForIconCell}} />

            <OutflowCell rowColor={rowColor} >
                { outflow } 
            </OutflowCell>

            <OutflowCell rowColor={rowColor} >
                { formatToCurrency(amount) }
            </OutflowCell>

        </TableRow>
    )
}

export default OutflowRow
