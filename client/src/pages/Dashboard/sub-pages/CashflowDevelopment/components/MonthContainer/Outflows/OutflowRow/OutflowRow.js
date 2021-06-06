import { formatToCurrency } from "../../../../modules/cellFunctions"
import OutflowCell from "./components/OutflowCell"
import IconCell from "../Cells/IconCell/IconCell"
import React, {useEffect, useState} from 'react'
import { TableRow } from '@material-ui/core'

const OutflowRow = (props) => {

    const {
        amount, 
        outflow,
        rowColor
    } = props.fromOutflowsTable
    
    const { showOutflowDeleteIcons } = props.fromFlowcategoryAccordion

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)

    useEffect(() => {
        const anIconWasActivated = (showOutflowDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showOutflowDeleteIcons, showUndoIcon])


    const propsForIconCell = {
        ...props,
        showUndoIcon,
        iconShouldShow, 
        setShowUndoIcon,
        setIconShouldShow 
    }

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
