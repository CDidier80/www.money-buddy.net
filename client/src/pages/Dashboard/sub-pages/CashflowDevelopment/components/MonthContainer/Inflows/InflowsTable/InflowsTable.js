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
    
    {/*  PROPS */}
    
    const {
        monthlyInflows
      } = props.fromMonthContainer
    
    {/*  STATE */}

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    {/*  useEffect */}


    {/*  FUNCTIONS */}

    const useStyles = makeStyles({
        table: {
            minWidth: "270px",
        },
        title: {
            flex: '1 1 100%',
        },
        tableContainer: {
            maxWidth: "890px",
            margin: "auto"
        },
    })

    const classes = useStyles()




    return (
        <AccordionDetails>
            <div className="summary placeholder left">
                <h3 className="widget-header distribution-header">Month</h3>
                <TableContainer 
                    className="tableContainer" 
                    component={Paper}
                >
                    <Table 
                        className={classes.table} 
                        // size="small" 
                        aria-label="a dense table"
                    >
                        <TableBody>
                            <InflowHeaders 
                                {...props}
                            />
                            {monthlyInflows.forEach((row, index) => {
                                const {source, amount} = row
                                const rowColor = offRowColor(index)
                                const propsForInflowRow = {
                                    source, 
                                    amount,
                                    rowIndex: index,
                                    rowColor,
                                    incomingDeletion,
                                    setIncomingDeletion
                                }   
                                return (
                                    <InflowRow 
                                        {...props}
                                        key={index + 2000}
                                        fromInflowsTable={{...propsForInflowRow}}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </AccordionDetails>

    )
}

export default InflowsTable