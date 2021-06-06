import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    AccordionDetails,
} from '@material-ui/core/'
import React, { useState } from 'react'
import InflowRow from "../InflowRow/InflowRow"
import InflowHeaders from "./components/InflowHeaders"
import "../../../../../universal-functions/cellFormatting"
import { useInflowsTableStyles } from "../../styles/styles"
import { pickColor } from "../../../../../../../../modules/themeAndStyles"


const InflowsTable = props => {
    
    /* ------------- PROPS ------------ */
    
    const { monthlyInflows } = props.fromMonthContainer
    
    /* ------------ STATE ------------ */

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    /* ------------ STYLE ------------ */

    const classes = useInflowsTableStyles(props.theme)


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
                            { ...props }
                        />
                        {monthlyInflows.map((row, index) => {
                            const {source, amount} = row
                            const rowColor = pickColor(index)
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
                                    { ...props }
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