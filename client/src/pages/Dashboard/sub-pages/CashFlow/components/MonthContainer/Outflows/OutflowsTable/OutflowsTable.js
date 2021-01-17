import React, { useState, useEffect } from 'react';
import OutflowHeaders from "./components/OutflowHeaders"
import OutflowRow from "../OutflowRow/OutflowRow"
// import { useStyles } from "./styles/useStyles"
import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    AccordionDetails
} from '@material-ui/core'



const OutflowTable = (props) => {

    {/*  PROPS */}

    const { flowcategory } = props.fromOutflowsAccordion
    const { outflows } = flowcategory


     {/*  STATE */}

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    {/*  FUNCTIONS */}

    // const classes = useStyles()


    return (
        <AccordionDetails>
            <TableContainer 
                className="tableContainer" 
                component={Paper}
            >
                <Table 
                    // className={classes.table} 
                    size="small" 
                    aria-label="a dense table"
                >
                    <TableBody>
                        <OutflowHeaders 
                            {...props}
                        />
                        {outflows.map((outflowObj, index) => {
                            const { outflow, amount } = outflowObj
                            const rowColor = (index % 2 === 0) ? "rgb(245, 255, 255)" : "rgba(255, 253, 245)"
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

