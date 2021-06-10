import { useLoginFormStyles } from "./styles/useStyles"
import FormControl from "./components/FormControl"
import React, { useState, useEffect }from 'react'
import LockedOut from './components/LockedOut'
import { withTheme, Avatar, Typography, FormControlLabel, Checkbox, Grid, Paper } from '@material-ui/core/'
import Header from "./components/Header"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const Form = props => {

    const { history } = props

    const [isSigningUp, toggleSigningUp] = useState(true)

    useEffect(() => {
        if (typeof props.location.state == "undefined") return
            const { signingUp } = props.location.state
            toggleSigningUp(signingUp ? true : false)
    }, [])

    const [reenteredPassword, setReenterPassword] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const propsFormBody = {
        child3: FormControl,
        child1: LockedOut,
        toggleSigningUp,
        child2: Header,
        isSigningUp,
        classes,
    }

    const forSubmit = {
        toggleSigningUp,
        isSigningUp,
        history,
        classes,
    }

    return  (
        <div className={formWrapper} >
            <Grid className={grid} container >
                <Grid
                    className={paperRoot}
                    component={Paper}
                    square
                >
                    <div className={paper} >
                        <Avatar className={avatar} >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography
                            className={header}
                            component="h1"
                            variant="h5"
                        >
                            { isSigningUp ? "Create an Account": "Welcome Back"  }
                        </Typography>
                        <EmailTextfield {...propsEmailField} />
                        <PasswordTextfield {...propsPasswordField} />
                        {isSigningUp && <ReenterPasswordField {...propsReenterField} />}
                        <FormControlLabel
                            color="primary"
                            aria-hidden="false"
                            label={(
                                <Typography className={rememberMe} >
                                    Remember me
                                </Typography>
                            )}
                            control={ <Checkbox value="remember" color="primary" /> }
                        />
                        <ThemedButton onClick={e => submitForm(e)}>
                            {isSigningUp ? 'Confirm and Sign Up' : 'Sign In'}
                        </ThemedButton>
                        <AccountPrompt {...propsAccountPrompt} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withTheme(Form)