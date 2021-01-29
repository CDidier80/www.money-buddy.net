import {
    Box,
    Grid,
    Paper,
    Avatar, 
    Checkbox,
    makeStyles,
    Typography,
    MuiThemeProvider,
    FormControlLabel,
} from '@material-ui/core/'
import theme from "./styles/theme"
import React, { useState, useEffect }from 'react';
import { Copyright } from "../Copyright/Copyright"
import TextFieldForm from "./components/TextfieldForm"
import { staticStyles, formFont } from "./styles/useStyles"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
const { signup, signin } = require("./modules/formFunctions") 


const Form = (props) => {

    const { setUserInfo, setAuth } = props.fromApp

    const promptTwo = "Don't have an account?  Sign up" 
    const promptOne = "Already have an account?  Sign in"

    const [reenteredPassword, setReenterPassword] = useState("")
    const [isSigningUp, toggleSigningUp] = useState(true)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")



    useEffect(() => {
        if (typeof props.location.state == "undefined") {
            return
        } else {
            const { signingUp } = props.location.state
            toggleSigningUp(signingUp ? true : false)
        }
    }, [])


    const matches = useMediaQuery('(max-height:730px)');
    const useStyles = makeStyles((theme) => ({
        ...staticStyles,
        root: {
            ...formFont,
            height: '70%',
            width: '50%',
            minWidth: "300px",
            maxWidth: "410px",
            maxHeight: "830px",
            paddingTop: matches ? "0" : "10vh",
            position: matches ? "relative" : null,
            margin: matches ? "3vh auto 3vh auto" : "0 auto",
        },
        paperRoot: {
            ...formFont,
            borderRadius: "12px",
            maxHeight: matches ? "600px" : null,
        },
        textfield: {
            "& .MuiFilledInput-root": {
                background: "rgb(black)"
            }
        }

    }))

    const classes = useStyles()


    const updateField = (e, stateFunction) => {   // [..., setState] 
        e.preventDefault()
        stateFunction(e.target.value)
    }


    const formSubmit = async (e) => {
        e.preventDefault()
        if (isSigningUp) {
            const args = {
                setUserInfo, 
                setAuth, 
                password, 
                reenteredPassword,
                email
            }
            const signedUp = await signup(args)
            if (signedUp){
                props.history.push('/dashboard')
            } else return
        } else {
            const args = {
                setUserInfo, 
                setAuth, 
                email, 
                password,
                history: props.history
            }
            await signin(args)
        }
    }


    return (

        <MuiThemeProvider theme={theme}>
            <div className="form-wrapper">
                <Grid container className={classes.root}>
                    <Grid 
                        component={Paper} 
                        square 
                        className={classes.paperRoot}
                    >
                        <div className={classes.paper}>
                            <Avatar 
                                className={classes.avatar}
                                style={{backgroundColor: "#fdbb2d"}}
                            >
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography 
                                className={classes.header}
                                component="h1" 
                                variant="h5"
                            >
                                { isSigningUp ? "Sign Up": "Sign In" }
                            </Typography>

                            <form className={classes.form} noValidate>
                                <TextFieldForm
                                    className={classes.textfield}
                                    required 
                                    autoFocus
                                    role={"email"}
                                    autoComplete="email"  
                                    label="Email Address" 
                                    onChange={(e)=>updateField(e, setEmail)}
                                />
                                <TextFieldForm 
                                    required                                 
                                    label={isSigningUp ? "Choose Password" : "Password"}
                                    role={"password"}
                                    autoComplete={ isSigningUp? "off" : "current-password"}
                                    onChange={(e)=>updateField(e, setPassword)} 
                                />
                                { isSigningUp && 
                                    <TextFieldForm 
                                        label="Reenter Password" 
                                        role={"password"}
                                        onChange={(e)=>updateField(e, setReenterPassword)} 
                                    />
                                }
                                <FormControlLabel 
                                    color="primary" 
                                    aria-hidden="false"
                                    control={
                                        <Checkbox 
                                            value="remember" 
                                            color="primary" 
                                        />
                                    }
                                    label={(
                                        <Typography className={classes.rememberMe}>
                                            Remember me
                                        </Typography>
                                    )}
                                />
                                <button 
                                    className="submitButton"
                                    onClick={(e)=>formSubmit(e)}
                                >
                                    {isSigningUp ? "CONFIRM AND SIGN UP": "SIGN IN"}
                                </button>

                                {/* 
                                <Grid item xs>
                                    <Link href="#" variant="body2">Forgot password?</Link>
                                </Grid> 
                                */}
                                <div className={classes.prompt}>
                                    <p 
                                        onClick={() => toggleSigningUp(!isSigningUp)}
                                    > 
                                        { isSigningUp ? promptOne : promptTwo } 
                                    </p>
                                </div>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
}

export default Form