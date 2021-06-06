
import makeLandingStyles from "./styles/styles"
import { withTheme } from '@material-ui/core/'
import Form from "./components/Form/Form"
import "./styles/signInSignUp.css"
import React from 'react';

const SignInSignUpPage = props => {

    const useLandingStyles = makeLandingStyles(props.theme)
    const classes = useLandingStyles()

    return (
        <div className={classes.signInSignUpPage}>
            <Form { ...props } />
        </div>
    )
}

export default withTheme(SignInSignUpPage)

