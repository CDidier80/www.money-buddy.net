import React from 'react'

const ClearLocalsButton = () => {

    const development = process.env.NODE_ENV === 'development'

    const props = {
        style: {
            padding: "5px",
            top: 0, left:0,
            position: "absolute", 
            zIndex: 10000000000
        }, 
        onClick: () => (localStorage.clear(), console.log("local storage cleared"))
    }

    return (   
        <>
            {development &&  <button {...props}>Clear Local Storage</button>}
        </>
    )
}

export default ClearLocalsButton
