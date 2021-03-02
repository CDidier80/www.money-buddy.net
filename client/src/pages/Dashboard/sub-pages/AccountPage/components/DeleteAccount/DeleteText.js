import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'

const DeleteText = ({ setDeleteTriggered, formFont }) => {

    const useStyles = makeStyles({
        deleteText: {
            backgroundColor: "white",
            cursor: "pointer",
            color: "#D22323",
            fontSize: "18px",
            padding: "15px",
            ...formFont
    }})

    const classes = useStyles()

    return (
        <Typography 
            onClick={()=>setDeleteTriggered(true)}
            className={classes.deleteText}
            component="h1" 
            variant="h5"
        >
            Delete Account
        </Typography>
        )
}

export default DeleteText
