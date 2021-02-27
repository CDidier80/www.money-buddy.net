import React from 'react'

const Spacers = () => {

    const props = { 
        style: { width: "263px" }
    }

    return (
        <>
            <div {...props}></div>
            <div {...props}></div>
        </>
    )
}

export default Spacers
