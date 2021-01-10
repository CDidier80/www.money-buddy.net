import React, { useState } from 'react';
import IncomeRow from "./IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { 
    makeStyles, 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    AccordionDetails
} from '@material-ui/core';


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


const IncomeTable = (props) => {
    
    {/*  PROPS */}

    const { newIncomes } = props.fromBudget    


    {/*  STATE */}

    const [incomingDeletion, setIncomingDeletion] = useState(false)

    {/*  FUNCTIONS */}

    const classes = useStyles()

    // const propsForHeaders = {

    // }

    return (
        <AccordionDetails>
            <TableContainer 
                className={classes.tableContainer}
                component={Paper}
            >
                <Table 
                    className={classes.table} 
                    size="small" 
                >


                    <TableBody>
                    <IncomeHeaders 
                        {...props}
                    />
                        {newIncomes.map((income, index) => {
                            const { source, amount } = income
                            let arrayIndex = index
                            const monthly = Math.round(amount / 12)
                            const propsForRows = {
                                source,
                                amount, 
                                monthly,
                                arrayIndex,
                                incomingDeletion, 
                                setIncomingDeletion,
                            }
                            return (
                                <IncomeRow 
                                    {...props}
                                    key={index + 100000}
                                    fromIncomeTable={{...propsForRows}}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default IncomeTable


