import { TableCell, TableRow  } from '@material-ui/core'
import CellButtonGroup from "./buttons/CellButtonGroup"
import { useIncomeHeaderStyles } from "../styles"
import React from 'react';



const IncomeHeaders = (props) => {

    const { onlyTwoCells, textSize: ts } = props

    const smallerWidth = props.onlyTwoCells ? {width: "70x"} : {}
    const textSize = ts ? ts : {}

    const inlineHeaderStyles = { ...smallerWidth, ...textSize }

    const classes = useIncomeHeaderStyles(props.theme)
    
    return (
        // <TableHead>
            <TableRow>
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}
                    style={inlineHeaderStyles}
                >
                    Income Source
                </TableCell>
                {props.onlyTwoCells ? 
                    <CellButtonGroup {...props} />
                :
                    <>
                        <TableCell 
                            className={classes.columnHeader} 
                            style={inlineHeaderStyles}
                            align="right"
                        >
                            Monthly Average
                        </TableCell>
                        <TableCell 
                            className={classes.columnHeader} 
                            style={inlineHeaderStyles}
                            align="right"
                        >
                                Annual
                        </TableCell>
                    </>
                }
            </TableRow>
    )
}

{/* </TableHead> */}
export default IncomeHeaders
