import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'


const EmailHeader = ({theme}) => {

    const useStyles = makeStyles(theme => ({
        header: {
            fontSize: "18px",
            backgroundColor: "white",
            fontFamily: "Lato,sans-serif",
            color: theme.palette.primaryDark.main,
            WebkitFontSmoothing: "antialiased!important",
            textRendering: "optimizeLegibility!important",
        },
    }))

    const classes = useStyles(theme)

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
