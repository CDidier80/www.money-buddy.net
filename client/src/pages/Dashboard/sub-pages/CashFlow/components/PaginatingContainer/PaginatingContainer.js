import React from 'react'

const PaginatingContainer = (props) => {
    
    const {months} = props

    return (
        <div>
            {months.map((month, index) => {
                return (
                    <MonthContainer 
                        fromPaginatingContainer={{...monthContainerProps}}
                    />
                )
                })}
        </div>
    )
}

export default PaginatingContainer
