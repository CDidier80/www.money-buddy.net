
import useLoginStyles from "./styles/useLoginStyles"
import "./styles/signInSignUp.css"
import React from 'react'

const Login = props => {

    const { formWrapper, grid, paperRoot, paper, rememberMe, header, avatar, loginPage } = useLoginStyles(props.theme)

    return (
        <div className={loginPage}>
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
        </div>
    )
}

export default Login

