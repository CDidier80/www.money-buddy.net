import { TableRow, TableCell, makeStyles} from '@material-ui/core/'
import { formatToCurrency } from "../../../../modules/cellFunctions"
import React, {useEffect, useState} from 'react'
import IconCell from "../Cells/IconCell/IconCell"

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
            overflowWrap: "break-word",
            fontSize: "12px",
            fontWeight: 500,
            padding: "8px",
            color: "black"
        }
    })

    const classes = useStyles()

    const propsForIconCell = {
        setIconShouldShow,
        setShowUndoIcon,
        iconShouldShow,
        showUndoIcon,
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
