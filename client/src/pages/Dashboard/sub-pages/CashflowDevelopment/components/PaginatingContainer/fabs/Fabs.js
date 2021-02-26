import { usePagination } from './usePagination'
import DirectionalFab from "./DirectionalFab"
import React from 'react'


const Fabs = (props) => {

    const { fromPaginatingContainer: pc} = props

    const [
        paginate, 
        backDisabled, 
        nextDisabled,
    ] = usePagination(pc)
    
    const propsNext = { disableOn: nextDisabled, paginate}
    const propsBack = { disableOn: backDisabled, paginate}
    
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
