import { pickColor } from "../../../../../universal-functions/styleFunctions"
import OutflowRow from "./OutflowRow"

import React from 'react'

const OutflowRows = (props) => {

    const { outflows } = props

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
                        ...props,
                        outflow,
                        amount, 
                    }
                    return (
                        <OutflowRow {...propsForRows} /> 
                    )
                })
            }
        </>
    )
}

export default OutflowRows
