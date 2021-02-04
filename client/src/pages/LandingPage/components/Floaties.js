import React from 'react'

const Floaties = () => {

    const floatyContainer = {
        position: "absolute", 
        width: "100vw",
        height: "50vh",
        bottom: "0", 
        left: "0",
        overflow: "hidden",
        backgroundColor: "black"
    }

    const floatyStyles={
        fontSize: "25px", 
        fontFamily: "sans-serif", 
        fontWeight: "bold", 
        animation: "move 30s infinite alternate ease-in-out",
        textShadow:` 
        0 1px 0 #cccccc, 
        0 2px 0 #cccccc, 
        0 3px 0 #cccccc;`
    }

    const possibleColors = [
        "#22c1c3", 
        "#fdbb2d", 
        "#c746ce",
        "#48ce46",
        // "#428bff"
    ]

    const goFloats = [null, null, null, null]
    return (
        <div styles={floatyContainer}>
        {/* {goFloats.map((elem, index, arr) => {
            const color = possibleColors[Math.floor(Math.random() * 4)]
            const styles={
                ...floatyStyles,
                color: color,
            }
            return <p key={3000 + index} style={styles}>$</p>
        })} */}
    </div>
    )
}

export default Floaties
