import { latoTextStyle } from '../modules/themeAndStyles'
import { Button, makeStyles } from '@material-ui/core/'

import React from 'react'

const ThemedButton = (props) => {

    const { theme, children, onClick } = props

    const mediaQueries = props.mediaQueries || {}
    const jssOverrides = props.jssOverrides || {}
    const style = props.overrides || {}

    const useStyles = makeStyles(theme => {
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
                ...jssOverrides
            },
            ...mediaQueries
        }
        return buttonStyles
    })

    const classes = useStyles(theme)


    const buttonProps = {
        className: classes.button,
        onClick,
        style,
    }

    return (
        <Button {...buttonProps}>
            { children }
        </Button>
    )
}

export default ThemedButton
