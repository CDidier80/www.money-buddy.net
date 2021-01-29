import { latoTextStyle } from "../../../../../../../../modules/styles"
import React from 'react'

const Header = ({text}) => {

    const styles = {
        ...latoTextStyle,
        fontSize: "20px",
        color: "black",
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
