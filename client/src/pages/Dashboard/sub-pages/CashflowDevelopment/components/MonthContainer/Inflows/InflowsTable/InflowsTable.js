import React, { useState, useEffect } from 'react';
import "../../../../../universal-functions/cellFormatting"
import { offRowColor } from "../../../../../universal-functions/styleFunctions"
import InflowRow from "../InflowRow/InflowRow"
import InflowHeaders from "./components/InflowHeaders"
import { 
    AccordionDetails,
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    makeStyles
} from '@material-ui/core/';


const InflowsTable = (props) => {
    
    /* -------------------------- PROPS ------------------------- */
    
    const { monthlyInflows } = props.fromMonthContainer
    
    /* ------------------------- STATE ------------------------- */

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    /* ----------------------- FUNCTIONS ----------------------- */

    const useStyles = makeStyles({
        tableBody: {
            overflow: "hidden"
        },
        tableContainer: {
            margin: "auto",
            padding: '4px'
        },
    })

    const classes = useStyles()


    return (
        <AccordionDetails 
            className={classes.tableContainer}
        >
            <TableContainer 
                component={Paper}
            >
                <Table 
                    className={classes.table} 
                    aria-label="a dense table"
                >
                    <TableBody
                        className={classes.tableBody}
                    >
                        <InflowHeaders 
                            {...props}
                        />
                        {monthlyInflows.map((row, index) => {
                            const {source, amount} = row
                            const rowColor = offRowColor(index)
                            const propsForInflowRow = {
                                setIncomingDeletion,
                                incomingDeletion,
                                rowIndex: index,
                                rowColor,
                                source, 
                                amount,
                            }   
                            return (
                                <InflowRow 
                                    fromInflowsTable={{...propsForInflowRow}}
                                    key={index + 2000}
                                    {...props}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>

    )
}

export default InflowsTable