import React, {useEffect, useState} from 'react'
import IconCell from "../Cells/IconCell/IconCell"
import { TableRow, TableCell, makeStyles} from '@material-ui/core/'

const InflowRow = (props) => {

    const { 
        showInflowDeleteIcons,
    } = props.fromInflowsAccordion

    const {
        source, 
        amount,
        rowColor
    } = props.fromInflowsTable

{/*  STATE */}

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}


    useEffect(() => {
        const anIconWasActivated = (showInflowDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showInflowDeleteIcons, showUndoIcon])



    const useStyles = makeStyles({
        row: {
            height: "38px",
            maxHeight: "38px",
            backgroundColor: rowColor
            
        },
        iconCell: {
            maxWidth: "36px",
            padding: "0px"
        },
        iconButton: {
            marginRight: "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            }
        },
        deleteIcon: {
            color: "red",
            fontSize: "13px"
        },
        undoIcon: {
            color: "lightgray",
        }
    })

    const classes = useStyles()

    const propsForIconCell = {
        iconShouldShow,
        setIconShouldShow,
        showUndoIcon,
        setShowUndoIcon
    }

    return (
        <TableRow>
            <IconCell 
                fromInflowRow={{...propsForIconCell}}
            />
            <TableCell 
            >
                {source}
            </TableCell>

            <TableCell 
                align="right"
            >
                {amount}
            </TableCell>
        </TableRow>
    )
}

export default InflowRow
