import { Typography } from '@material-ui/core/'
import React from 'react'

const Header = (props) => {

    const { classes, isSigningUp } = props
    const correctHeader = isSigningUp ? "Sign Up": "Sign In" 
    
    return (
        <Typography 
            className={classes.header}
            component="h1" 
            variant="h5"
        >
            { correctHeader }
        </Typography>
    )
}

export default Header
