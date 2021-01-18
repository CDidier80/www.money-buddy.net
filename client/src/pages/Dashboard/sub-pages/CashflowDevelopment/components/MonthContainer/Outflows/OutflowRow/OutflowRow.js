import React, {useEffect, useState} from 'react'
import IconCell from "../Cells/IconCell/IconCell"
import { makeStyles, TableRow, TableCell} from '@material-ui/core'



const OutflowRow = (props) => {

    
    {/*  PROPS */}

    const {
        showOutflowDeleteIcons
    } = props.fromFlowcategoryAccordion

    const {
        flowcategoryIndex
    } = props.fromOutflowsAccordion

    const {
        outflow,
        outflowIndex,
        amount, 
        incomingDeletion, 
        setIncomingDeletion,
        rowColor
    } = props.fromOutflowsTable


    {/*  STATE  */}

    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}




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



    {/*  FUNCTIONS */}

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



    const propsForIconCell= {
        showUndoIcon,
        setShowUndoIcon,
        iconShouldShow, 
        setIconShouldShow 
    }



    return (
        <TableRow
            className={classes.row}
        >
            <IconCell 
                {...props}
                fromOutflowRow={{...propsForIconCell}}
            />
            <TableCell 
                align="right"
            >
                {outflow}
            </TableCell>
            <TableCell 
                align="right"
            >
                {amount}
            </TableCell>
        </TableRow>
    )
}

export default OutflowRow
