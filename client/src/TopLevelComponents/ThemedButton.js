import { Button, makeStyles, withTheme } from '@material-ui/core/'
import { latoTextStyle } from '../modules/themeAndStyles'

import React from 'react'

const ThemedButton = (props) => {

    const { theme, children, onClick } = props

    const useStyles = makeStyles(theme => {

        const { primary } = theme.palette
        
        const buttonStyles = {
            button: {
                width: "100%",
                color: "white",
                ...latoTextStyle,
                fontSize: "1.1rem",
                textTransform: "none",
                margin: "10px 0 15px 0",
                padding: "8px 8px 8px 8px",
                background: theme.gradients.gradient1,
                boxShadow: theme.boxShadows.buttonShadow,
                "&:hover": {
                    boxShadow: `${primary.transparent["6"]} 0px 10px 17px -5px`
                }
            }
        }
        return buttonStyles
    })

    const classes = useStyles(theme)

    return (
        <Button
            className={classes.button}
            style={props.overrides && props.overrides}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ThemedButton
