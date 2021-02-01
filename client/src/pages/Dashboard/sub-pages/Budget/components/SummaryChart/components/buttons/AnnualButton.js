import { Button } from '@material-ui/core'
import { useStyles } from "./buttonStyles"
import React from 'react'

const AnnualButton = (props) => {

    const {monthly, setMonthly} = props.fromSummary


    const switchToAnnually = (e) => {
        e.preventDefault()
        monthly && setMonthly(false)

    }

    const classes = useStyles()
    const annualButtonStyle = !monthly ? classes.activeButton : classes.inactiveButton

    return (
        <Button 
            className={annualButtonStyle}
            onClick={(e) => switchToAnnually(e)}
        >
            Annual
        </Button>
    )
}

export default AnnualButton
