import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import cyan from '@material-ui/core/colors/cyan';


const NextAndBackIcons = (props) => {

    const useStyles = makeStyles((theme) => ({
        iconContainer: {
            marginTop: "20px", 
            width: "150px",
            display: "flex",
            justifyContent: "space-evenly"
        },
        fabBlue: {
            color: theme.palette.common.white,
            backgroundColor: cyan[100],
            '&:hover': {
                backgroundColor: cyan[200],
            },
        },
    }))

    const classes = useStyles()
    return (
        <div
            className={classes.iconContainer}
        >
            <Fab 
                className={classes.fabBlue}
                aria-label="add"
                size="small"
            >
                <ArrowBackIosRoundedIcon />
            </Fab>
            <Fab 
                className={classes.fabBlue}
                aria-label="edit"
                size="small"

            >
                <ArrowForwardIosRoundedIcon />
            </Fab>
        </div>
    )
}

export default NextAndBackIcons
