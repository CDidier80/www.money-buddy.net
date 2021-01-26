import { Typography, makeStyles } from '@material-ui/core/'
import React from 'react'

const DeleteText = (props) => {

    const { setDeleteTriggered, formFont } = props

    const useStyles = makeStyles({
        deleteText: {
        padding: "15px",
        color: "#D22323",
        backgroundColor: "white",
        fontSize: "18px",
        cursor: "pointer",
        ...formFont
    }})

    const classes = useStyles()

    return (
        <Typography 
            className={classes.deleteText}
            component="h1" 
            variant="h5"
            onClick={()=>setDeleteTriggered(true)}
        >
            Delete Account
        </Typography>
        )
}

export default DeleteText
