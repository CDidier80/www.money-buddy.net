import { pickColor } from "../../../../../../../../modules/themeAndStyles"
import OutflowRow from "./OutflowRow"

import React from 'react'

const OutflowRows = props => {

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
                        // incomingDeletion, 
                        rowColor,
                        outflow,
                        amount, 
                    }
                    return (
                        <OutflowRow 
                            { ...props }
                            key={`${index * -1}`}
                            fromOutflowsTable={{...propsForRows}}
                        /> 
                    )
                })
            }
        </>
    )
}

export default OutflowRows
