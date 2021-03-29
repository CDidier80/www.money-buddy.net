import FlowCell from "../../../../../../../../TopLevelComponents/cells/FlowCell"
import { TableRow, makeStyles } from '@material-ui/core/'
import IconCell from "../Cells/IconCell/IconCell"
import React, {useEffect, useState} from 'react'

const InflowRow = (props) => {

    /* -- PROPS -- */
 
    const {
        source, 
        amount,
        rowColor,
        showInflowDeleteIcons,
    } = props

    /* -- STATE -- */

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    /* ---- useEffect ---- */

    useEffect(() => {
        const anIconWasActivated = (showInflowDeleteIcons || showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showInflowDeleteIcons, showUndoIcon])


    const classes = (makeStyles({ row: { backgroundColor: rowColor }}))()

    const propsForIconCell = {
        setIconShouldShow,
        setShowUndoIcon,
        iconShouldShow,
        showUndoIcon,
    }

    const propsSourceCell = {
        defaultValue: source,
        numberCell: false,
        rowColor,
        onSubmit: () => {},
        align: "right"
    }

    const propsNumberCell = {
        defaultValue: amount,
        numberCell: true,
        rowColor,
        onSubmit: () => {},
        align: "right"
    }

    return (
        <TableRow className={classes.row} >
            <IconCell {...propsForIconCell} />
            <FlowCell {...propsSourceCell}  />
            <FlowCell {...propsNumberCell}  />
        </TableRow>
    )
}

export default InflowRow
