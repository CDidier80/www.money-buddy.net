import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import cyan from '@material-ui/core/colors/cyan';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import {
    staticStyles,
    fabDisabledStyle,
    fabEnabledStyle,
    staticFab
} from "./styles/paginationStyles"


const NextAndBackIcons = (props) => {

    /* ----------------------- PROPS ----------------------- */

    const {
        displayRange,
        setDisplayRange,
        pagMemoTicker,
        incrementPagTicker
    } = props.fromPaginatingContainer


    /* ----------------------- STATE ----------------------- */

    const [backDisabled, setBackDisabled] = useState(true)
    const [nextDisabled, setNextDisabled] = useState(false)


    /* ----------------------- FUNCTIONS ----------------------- */    
    
    const enableAndDisableButtons = (nextDisplayRange) => {
        console.log("next display range", nextDisplayRange)
        const shouldNextDisable = nextDisplayRange[2] == 11 ? true : false
        const shouldBackDisable = nextDisplayRange[0] == 0 ? true : false
        setNextDisabled(shouldNextDisable)
        setBackDisabled(shouldBackDisable)
    }
    
    /**
     * @param {event} e 
     * @param {string} direction "next" or not, representing paginating next or back
     */
    
    const paginate = (e, direction) => {
        e.preventDefault()
        const next = (direction === "next")
        const itemIndexBase = next ? displayRange[2] : displayRange[0]
        const nextThreeItems = [itemIndexBase + 1, itemIndexBase + 2, itemIndexBase + 3]
        const prevThreeItems = [itemIndexBase - 3, itemIndexBase - 2, itemIndexBase - 1]
        setDisplayRange(next ? nextThreeItems : prevThreeItems)
        enableAndDisableButtons(next ? nextThreeItems : prevThreeItems)
        incrementPagTicker(pagMemoTicker + 1)

    }
    
    
    /* ----------------------- STYLES ----------------------- */

    const checkDisabledStyle = (range) => {
        return range[0] == displayRange[0] ? fabDisabledStyle : fabEnabledStyle
    }

    const useStyles = makeStyles((theme) => ({
        ...staticStyles,
        fab: {
            ...staticFab,
            color: theme.palette.common.white,
            backgroundColor: cyan[100],
        },
        fabBack: {
            ...checkDisabledStyle([0,1,2]),
            marginRight: "18px"
        },
        fabNext: {
            ...checkDisabledStyle([9,10,11])
        },
    }))

    const classes = useStyles()


    /* --------------------------- JSX --------------------------- */

    return (
        <div
            className={classes.iconContainer}
        >
            <div className={classes.fabWrapper}>
                <Fab 
                    className={`${classes.fab} ${classes.fabBack}`}
                    aria-label="add"
                    onClick={(e) => paginate(e, "back")}
                    disabled={backDisabled}
                >
                    <ArrowBackIosRoundedIcon 
                        className={classes.svg}
                    />
                </Fab>
                <Fab 
                    className={`${classes.fab} ${classes.fabNext}`}
                    aria-label="edit"
                    onClick={(e) => paginate(e, "next")}
                    disabled={nextDisabled}
                >
                    <ArrowForwardIosRoundedIcon 
                        className={classes.svg}
                    />
                </Fab>
            </div>
            <div className={classes.emptySpacer}></div>
            <div className={classes.emptySpacer}></div>
        </div>
    )
}

export default NextAndBackIcons