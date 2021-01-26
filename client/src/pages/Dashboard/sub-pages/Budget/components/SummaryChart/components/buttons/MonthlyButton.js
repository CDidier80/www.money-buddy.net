import React from 'react'
import { Button } from '@material-ui/core'
import { useStyles } from "./buttonStyles"

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

    return (
        <Button 
            className={monthlyButtonStyle}
            onClick={(e) => switchToMonthly(e)}
        >
            Monthly
        </Button>
    )
}

export default MonthlyButton
