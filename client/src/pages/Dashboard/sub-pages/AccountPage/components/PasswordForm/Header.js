import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'


const Header = () => {

    const useStyles = makeStyles({
        header: {
            color: "black",
            backgroundColor: "white",
            fontSize: "18px",
            fontFamily: "Lato,sans-serif",
            textRendering: "optimizeLegibility!important",
            WebkitFontSmoothing: "antialiased!important"
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
