import { pickColor } from "../../../../../universal-functions/styleFunctions"
import OutflowRow from "./OutflowRow"

import React from 'react'

const OutflowRows = (props) => {

    const { outflows } = props.fromOutflowsAccordion.flowcategory

    return (
        <>
            {
                outflows.map((outflowObj, index) => {
                    const { outflow, amount } = outflowObj
                    const rowColor = pickColor(index)                            
                    const propsForRows = {
                        // setIncomingDeletion,
                        outflowIndex: index,
                        key: `${index * -1}`,
                        // incomingDeletion, 
                        rowColor,
                        outflow,
                        amount, 
                    }
                    return (
                        <OutflowRow 
                            {...props}
                            fromOutflowsTable={{...propsForRows}}
                        /> 
                    )
                })
            }
        </>
    )
}

export default OutflowRows
