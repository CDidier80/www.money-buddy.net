import React, { useState, useEffect } from 'react';
import OutflowHeaders from "./components/OutflowHeaders"
import OutflowRow from "../OutflowRow/OutflowRow"
import { offRowColor } from "../../../../../universal-functions/styleFunctions"
import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    AccordionDetails,
    makeStyles
} from '@material-ui/core'



const OutflowTable = (props) => {

    {/*  PROPS */}

    const { flowcategory } = props.fromOutflowsAccordion
    const { outflows } = flowcategory


     {/*  STATE */}

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    {/*  FUNCTIONS */}

    const useStyles = makeStyles({
        tableBody: {
            overflow: "hidden"
        },
        tableContainer: {
            margin: "auto",
            padding: '4px',
            boxShadow: "1px -1px 1px rgb(0, 0, 0, 0.1)"
        },
        table: {
            
        }
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
                    size="small" 
                    aria-label="a dense table"
                >
                    <TableBody
                        // className={classes.tableBody}
                    >
                        <OutflowHeaders 
                            {...props}
                        />
                        {outflows.map((outflowObj, index) => {
                            const { outflow, amount } = outflowObj
                            const rowColor = offRowColor(index)                            
                            const propsForRows = {
                                outflow,
                                amount, 
                                outflowIndex: index,
                                incomingDeletion, 
                                setIncomingDeletion,
                                rowColor
                            }
                            return (
                                <OutflowRow 
                                    key={`${index * -1}`} 
                                    {...props}
                                    fromOutflowsTable={{...propsForRows}}
                                /> 
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default OutflowTable

