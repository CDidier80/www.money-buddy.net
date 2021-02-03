import { Button } from '@material-ui/core'
import { useStyles } from "./buttonStyles"
import React from 'react'

const MonthlyButton = (props) => {

    const {monthly, setMonthly} = props.fromSummary

    const switchToMonthly = (e) => {
        e.preventDefault()
        if (!monthly) {
            setMonthly(true)
        }
    }

    const classes = useStyles()
    const monthlyButtonStyle = monthly ? classes.activeButton : classes.inactiveButton

    const divider = {borderRight: "1px solid #22c1c3"}

    return (
        <Button 
            onClick={(e) => switchToMonthly(e)}
            className={monthlyButtonStyle}
            style={divider}
        >
            Monthly
        </Button>
    )
}

export default MonthlyButton
