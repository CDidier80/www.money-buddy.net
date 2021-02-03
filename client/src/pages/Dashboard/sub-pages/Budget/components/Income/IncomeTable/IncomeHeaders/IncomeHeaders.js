import { TableCell, TableRow, makeStyles, useMediaQuery } from '@material-ui/core';
import CellButtonGroup from "./buttons/CellButtonGroup"
import React from 'react';



const IncomeHeaders = (props) => {

    const smallerWidth = props.onlyTwoCells ? {width: "70x"} : {}
    
    const useStyles = makeStyles({
    
        columnHeader: {
            color: "#2c7b71",
            fontWeight: "bold",
            ...props.textSize,
        },
        emptyCell: {
            maxWidth: "36px",
            minWidth: "36px", 
            padding: "0px"
        }
    })

    const classes = useStyles()
    
    return (
        // <TableHead>
            <TableRow>
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}
                    style={smallerWidth}
                >
                    Income Source
                </TableCell>
                {props.onlyTwoCells ? 
                    <CellButtonGroup {...props} />
                :
                    <>
                        <TableCell 
                            className={classes.columnHeader} 
                            align="right"
                        >
                            Monthly Average
                        </TableCell>
                        <TableCell 
                            className={classes.columnHeader} 
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
