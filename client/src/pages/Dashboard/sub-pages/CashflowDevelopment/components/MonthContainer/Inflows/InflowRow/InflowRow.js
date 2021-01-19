import React, {useEffect, useState} from 'react'
import IconCell from "../Cells/IconCell/IconCell"
import { TableRow, TableCell, makeStyles} from '@material-ui/core/'
import { formatToCurrency } from "../../../../modules/cellFunctions"

const InflowRow = (props) => {

    // const { 
    //     showInflowDeleteIcons,
    // } = props.fromMonthContainer.monthlyInflows

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
            backgroundColor: rowColor
        },
        cell : {
            padding: "8px",
            fontSize: "12px",
            overflowWrap: "break-word",
            fontWeight: 700,
            color: "black"
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
        <TableRow
            className={classes.row}
        >
            <IconCell 
                fromInflowRow={{...propsForIconCell}}
            />
            <TableCell 
                className={classes.cell}
                align="right"
            >
                {source}
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

export default InflowRow
