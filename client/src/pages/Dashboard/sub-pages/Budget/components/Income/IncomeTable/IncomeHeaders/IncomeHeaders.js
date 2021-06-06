import CellButtonGroup from "./buttongroup/CellButtonGroup"
import { TableRow  } from '@material-ui/core'
import HeaderCell from "./cells/HeaderCell"
import EmptyCell from "./cells/EmptyCell"
import React from 'react';



const IncomeHeaders = props => {


    return (
            <TableRow>
                <EmptyCell />
                
                <HeaderCell { ...props } label="Income Source" />
                
                {props.onlyTwoCells ? 
                    <CellButtonGroup { ...props } />
                :
                    <>
                        <HeaderCell { ...props } label="Monthly Average" />    
                        <HeaderCell { ...props } label="Annual" />  
                    </>
                }
            </TableRow>
    )
}

export default IncomeHeaders
