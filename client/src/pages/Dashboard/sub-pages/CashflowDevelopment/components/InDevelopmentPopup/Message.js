import React from 'react'

const p1 = "The Cashflows dashboard is under construction."

const p5 = "Mobile devices should use landscape view for best experience - improved responsiveness is coming soon."

const p2 = `
    Inflows and outflows will soon be integrated with the
    user's budget, allowing for more detailed and sophisticated management of the data.
    `
const p3 = `
    A temporary randomize button has been added to the top-right of the page to 
    simulate a user's experience.
    `



const PTagSpaced = (props) => {
    const space = {
        marginBottom: "8px"
    }
    return (
        <p style={space}>{props.children}</p>

    )
}

const Message = () => {
    return (    
        <div>
            <PTagSpaced>{p1}</PTagSpaced>
            <PTagSpaced>{p5}</PTagSpaced>
            <PTagSpaced>{p2}</PTagSpaced>
            <PTagSpaced>{p3}</PTagSpaced>
        </div>
    )
}

export default Message
