import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import { useFabStyles } from "../styles/paginationStyles"
import Fab from '@material-ui/core/Fab'
import React from 'react'


const DirectionalFab = props => {

    const {
        displayRange, 
        disableOn, 
        direction, 
        paginate,
        theme,
    } = props

    const fabStyleProps = {
        theme: theme, 
        displayRange: displayRange
     }

    const classes = useFabStyles(fabStyleProps)

    const fabProps = {
        className: `${classes["fab"]} ${classes[direction]}`,
        onClick: (e) => paginate(e, direction),
        "aria-label": direction,
        disabled: disableOn,
    }

    const svg = { className: classes.svg }

    const icon = direction === "next" ? 
        <ArrowForwardIosRoundedIcon {...svg} /> : 
        <ArrowBackIosRoundedIcon    {...svg} />


    return <Fab {...fabProps}> {icon} </Fab>
    
}

export default DirectionalFab
