import React from 'react';
import IncomeRow from "./IncomeRow/IncomeRow"
import IncomeHeaders from "./IncomeHeaders/IncomeHeaders"
import { 
    makeStyles, 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
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
    const { showIncomeDeleteIcons, toggleIncomeDeleteIcons } = props.fromIncomeAccordion


    {/*  FUNCTIONS */}

    const classes = useStyles()


    return (
        <TableContainer 
            className="tableContainer" 
            component={Paper}
        >
            <Table className={classes.table} size="small" aria-label="a dense table">
                <IncomeHeaders 
                    showIncomeDeleteIcons={showIncomeDeleteIcons}
                />

                <TableBody>
                    {newIncomes.map((income, index) => {
                        const { source, amount } = income
                        const monthly = Math.round(amount / 12)
                        return (
                            <IncomeRow 
                                {...props}
                                key={index + 100000}
                                source={source}
                                amount={amount}
                                monthly={monthly}
                                arrayIndex={index}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default IncomeTable


