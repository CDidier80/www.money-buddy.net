import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles,
    TableContainer, 
    AccordionDetails,
} from '@material-ui/core'
import React, { useState } from 'react'
import OutflowRow from "../OutflowRow/OutflowRow"
import OutflowHeaders from "./components/OutflowHeaders"
import { offRowColor } from "../../../../../universal-functions/styleFunctions"


const OutflowTable = (props) => {

    /*  PROPS */

    const { flowcategory } = props.fromOutflowsAccordion
    const { outflows } = flowcategory

     /*  STATE */

    const [incomingDeletion, setIncomingDeletion] = useState(false)


    /*  FUNCTIONS */

    const useStyles = makeStyles({
        tableBody: { overflow: "hidden" },
        tableContainer: {
            boxShadow: "1px -1px 1px rgb(0, 0, 0, 0.1)",
            padding: '4px',
            margin: "auto",
        },
    })

    const classes = useStyles()

    return (
        <AccordionDetails
            className={classes.tableContainer}
        >
            <TableContainer component={Paper}>
                <Table 
                    className={classes.table} 
                    aria-label="a dense table"
                    size="small" 
                >
                    <TableBody >
                        <OutflowHeaders 
                            {...props}
                        />
                        {outflows.map((outflowObj, index) => {
                            const { outflow, amount } = outflowObj
                            const rowColor = offRowColor(index)                            
                            const propsForRows = {
                                setIncomingDeletion,
                                outflowIndex: index,
                                incomingDeletion, 
                                outflow,
                                amount, 
                                rowColor
                            }
                            return (
                                <OutflowRow 
                                    {...props}
                                    key={`${index * -1}`} 
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

