import { Button } from '@material-ui/core'
import { useStyles } from "./buttonStyles"
import React from 'react'

const AnnualButton = (props) => {

    const { annualToggled, setAnnualToggled } = props

    const switchToAnnually = (e) => {
        e.preventDefault()
        !annualToggled && setAnnualToggled(true)

    }

    const classes = useStyles()
    const annualButtonStyle = annualToggled ? classes.activeButton : classes.inactiveButton

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
