import { Button } from '@material-ui/core'
import { useStyles } from "./buttonStyles"
import React from 'react'

const MonthlyButton = (props) => {

    const { annualToggled, setAnnualToggled } = props

    const switchToMonthly = (e) => {
        e.preventDefault()
        annualToggled && setAnnualToggled(false)
        
    }

    const classes = useStyles()
    const monthlyButtonStyle = !annualToggled ? classes.activeButton : classes.inactiveButton

    const divider = { borderRight: "1px solid #22c1c3" }

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
