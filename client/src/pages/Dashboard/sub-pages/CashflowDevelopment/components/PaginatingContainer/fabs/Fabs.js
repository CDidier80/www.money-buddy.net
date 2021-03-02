import { usePagination } from './usePagination'
import DirectionalFab from "./DirectionalFab"
import React from 'react'


const Fabs = (props) => {

    const { fromPaginatingContainer: FPC } = props

    /* functions */

    const [
        paginate, 
        backDisabled, 
        nextDisabled,
    ] = usePagination(FPC)

    /* props for children */

    const { theme, displayRange } = FPC

    const fabProps = {
        displayRange,
        paginate, 
        theme
    }
    
    const propsNext = { 
        disableOn: nextDisabled, 
        direction: "next", 
        ...fabProps
}
    const propsBack = { 
        disableOn: backDisabled, 
        direction: "back", 
        ...fabProps
}
    
    const wrapProps = {
        style: {
            width: "263px"    
        } 
    }

    return (
        <div {...wrapProps} >
            <DirectionalFab {...propsBack} />
            <DirectionalFab {...propsNext} />
        </div>
    )
}

export default Fabs
