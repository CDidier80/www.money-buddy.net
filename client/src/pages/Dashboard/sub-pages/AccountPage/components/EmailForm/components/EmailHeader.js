import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'


const EmailHeader = () => {

    const useStyles = makeStyles({
        header: {
            color: "black",
            fontSize: "18px",
            backgroundColor: "white",
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
            Update Email
        </Typography>
    )
}

export default EmailHeader
