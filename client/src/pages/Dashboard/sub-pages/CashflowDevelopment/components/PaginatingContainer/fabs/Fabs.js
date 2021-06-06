import { usePagination } from './usePagination'
import DirectionalFab from './DirectionalFab'
import React from 'react'

const Fabs = ({ fromPaginatingContainer: FPC }) => {

    const [
        paginate, 
        backDisabled, 
    ] = usePagination(FPC)

    const { theme, displayRange } = FPC

    const fabProps = {
        displayRange,
        paginate, 
        theme
    }

    return (
        <div style={{ width: '263px'}} >
            <DirectionalFab {...{ 
                disableOn: backDisabled, 
                direction: 'back', 
                ...fabProps
            }} />
            <DirectionalFab 
                {...{ 
                disableOn: backDisabled, 
                direction: 'back', 
                ...fabProps
                }} 
            />
        </div>
    )
}

export default Fabs
