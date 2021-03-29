import { usePagination } from './usePagination'
import DirectionalFab from "./DirectionalFab"
import React from 'react'


const Fabs = (props) => {

    const {     
        theme,    
        displayRange,
        pagMemoTicker,
        setDisplayRange,
        incrementPagTicker 
    } = props

    /* functions */

    const [
        paginate, 
        backDisabled, 
        nextDisabled,
    ] = usePagination({
        displayRange,
        pagMemoTicker,
        setDisplayRange,
        incrementPagTicker
    })

    /* props for children */

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
