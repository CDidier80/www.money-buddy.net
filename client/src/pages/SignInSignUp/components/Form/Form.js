import React, { useState }from 'react';
import { Copyright } from "../Copyright/Copyright"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from "./styles/useStyles"
import theme from "./styles/theme"
import {
    Avatar, 
    TextField,
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
    const [ isSigningUp, toggleSigningUp ] = useState(props.location.state.isSigningUp ? true : false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reenteredPassword, setReenterPassword] = useState("")


    const classes = useStyles()

    const updateField = (e, stateFunction) => {   // [..., setState] 
        e.preventDefault()
        const { value } = e.target
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
                            <TextField 
                                autoFocus
                                required 
                                fullWidth 
                                variant="outlined" 
                                margin="normal" 
                                label="Email Address" 
                                name="email" 
                                type="email" 
                                id="email" 
                                autoComplete="email"  
                                onChange={(e)=>updateField(e, setEmail)}
                            />
                            <TextField 
                                required 
                                fullWidth 
                                variant="outlined"
                                margin="normal" 
                                label={isSigningUp ? "Choose Password" : "Password"}
                                name="password" 
                                type="password" 
                                id="password"  
                                autoComplete={ isSigningUp? "off" : "current-password"}
                                onChange={(e)=>updateField(e, setPassword)} 
                            />
                            { isSigningUp && 
                                <TextField 
                                    fullWidth
                                    variant="outlined" 
                                    margin="normal"  
                                    label="Reenter Password" 
                                    name="password" 
                                    type="password"
                                    id="password" 
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