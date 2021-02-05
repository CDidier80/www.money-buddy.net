import { latoTextStyle } from "../../../../../../../../modules/styles"
import React from 'react'

const Header = ({text}) => {

    const styles = {
        color: "black",
        ...latoTextStyle,
        fontSize: "20px",
        marginBottom: "10px",
        paddingRight: "10px"
    }

    return (
        <h2 style={styles}>
            {text}
        </h2>
    )
}

export default Header
