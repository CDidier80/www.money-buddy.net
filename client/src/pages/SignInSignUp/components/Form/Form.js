import React, { useState, useEffect }from 'react';
import { Copyright } from "../Copyright/Copyright"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextFieldForm from "./components/TextfieldForm"
// import useStyles from "./styles/useStyles"
import {staticStyles, formFont} from "./styles/useStyles"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "./styles/theme"
import {
    Avatar, 
    makeStyles,
    FormControlLabel,
    Typography,
    Checkbox,
    Paper,
    Box,
    Grid,
    MuiThemeProvider
} from '@material-ui/core/'
const {signup, signin} = require("./modules/formFunctions") 


const Form = (props) => {

    const { setUserInfo, setAuth } = props

    const promptOne = "Already have an account?  Sign in"
    const promptTwo = "Don't have an account?  Sign up" 
    const [ isSigningUp, toggleSigningUp ] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reenteredPassword, setReenterPassword] = useState("")



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
            height: '70%',
            maxHeight: "830px",
            width: '50%',
            minWidth: "300px",
            maxWidth: "410px",
            position: matches ? "relative" : null,
            margin: matches ? "3vh auto 3vh auto" : "0 auto",
            paddingTop: matches ? "0" : "10vh",
            ...formFont,
        },
        paperRoot: {
            borderRadius: "12px",
            ...formFont,
            maxHeight: matches ? "600px" : null,
        },

    }))

    const classes = useStyles()


    const updateField = (e, stateFunction) => {   // [..., setState] 
        e.preventDefault()
        const { value } = e.target
        console.log(value)
        stateFunction(value)
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
            } else {
                return
            }
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
                                    autoFocus
                                    required 
                                    label="Email Address" 
                                    role={"email"}
                                    autoComplete="email"  
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