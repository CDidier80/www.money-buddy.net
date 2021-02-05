import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'

const Header = () => {

    const useStyles = makeStyles({
        header: {
            color: "black",
            fontSize: "18px",
            backgroundColor: "white",
            fontFamily: "Lato,sans-serif",
            WebkitFontSmoothing: "antialiased!important",
            textRendering: "optimizeLegibility!important",
        },
    })

    const classes = useStyles()

    return (
        <Typography 
            className={classes.header}
            component="h1" 
            variant="h5"
        >
            Change Password
        </Typography>
    )
}

export default Header
