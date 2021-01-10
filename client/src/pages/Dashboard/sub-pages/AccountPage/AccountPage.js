import React, { useState } from 'react';
import { UpdatePassword, UpdateEmail } from "../../../../Services/UserService"
import { TextField, Typography } from '@material-ui/core/';
import DeletePopup from './components/DeletePopup';
import useStyles from "./styles/useStyles"
import "./styles/accountPage.css"
import MoneyBuddyTheme from "./styles/MoneyBuddyTheme"
import { withSnackbar, useSnackbar  } from 'notistack'

const AccountPage = (props) => {

    {/*  PROPS */}
    
    const { id: user_id } = props
    
    
    {/*  STATE  */}
    
    const [newPassword, setNewPassword ] = useState("")
    const [reenteredNewPassword, setReenteredNewPassword ] = useState("")
    const [newEmail, setNewEmail ] = useState("")
    const [deleteTriggered, setDeleteTriggered] = useState(false)
    

    {/*  FUNCTIONS  */}

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const errorSnackbar = (variable) => {
        enqueueSnackbar(`Failed to Change ${variable}`, {variant: 'Error'})
    }
    
    
    const mismatch = (variableOne, variableTwo) => {
        enqueueSnackbar(`${variableOne} doesn't match ${variableTwo}`, {variant: 'Error'})
    }
    

    const updateSnackbar = (variable) => {
        enqueueSnackbar(`Successfully Updated ${variable}`, {variant: 'Success', iconVariant: "Success"})
    }
    


    const classes = useStyles()

    const updateField = (e, stateFunction) => {   
        e.preventDefault()
        const { value } = e.target
        stateFunction(value)
    }
    

    const submitNewPassword = async (e) => {
        e.preventDefault()
        // log(3)
        if (newPassword === "" | reenteredNewPassword === "")  {
            errorSnackbar("Password")
            return
        } else if (newPassword !== reenteredNewPassword){
            mismatch('New Password', 'Reentered Password')
            return
        } else {
            try {
                const response = await UpdatePassword({userId: user_id, password: newPassword})
                console.log("submit new password response: ", response)
                if (response.status === 200) {
                    updateSnackbar('Password')
                }
            } catch (error) {
                console.log(error)
                errorSnackbar('Password')
            }
        }
    }


    const submitNewEmail = async (e) => {
        e.preventDefault()
        // log(3)
        if (newEmail === "") {
            errorSnackbar("Email Address")
            return
        }
        try {
            const response = await UpdateEmail({userId: user_id, email: newEmail})
            console.log("submit new email response: ", response)
            if (response.status === 200) {
                updateSnackbar('Email Address')
            }
        } catch (error) {
            console.log(error)
            errorSnackbar('Email Address')
        }
    }
    

    return (
        // <MoneyBuddyTheme>
                <div className="account-page" className={classes.paper}>
                    <Typography 
                        className={classes.header}
                        component="h1" 
                        variant="h5"
                    >
                        Change Password
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            required 
                            fullWidth 
                            variant="outlined"
                            margin="normal" 
                            label="New Password"
                            name="password" 
                            type="password" 
                            id="password"  
                            onChange={(e)=>updateField(e, setNewPassword)} 
                        />
                    
                        <TextField 
                            fullWidth
                            variant="outlined" 
                            margin="normal"  
                            label="Reenter New Password" 
                            name="password" 
                            type="password"
                            id="password" 
                            onChange={(e)=>updateField(e, setReenteredNewPassword)} 
                        />

                        <button 
                            className="submitButton account-page"
                            onClick={(e)=>submitNewPassword(e)}
                        >
                            Submit
                        </button>

                    </form>

                    <Typography 
                        className={classes.header}
                        component="h1" 
                        variant="h5"
                    >
                        Update Email
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
                            onChange={(e)=>updateField(e, setNewEmail)}
                        />
                        
                        <button 
                            className="submitButton account-page"
                            onClick={(e)=>submitNewEmail(e)}
                        >
                            Submit
                        </button>
                    </form>
                    <Typography 
                        className={classes.deleteText}
                        component="h1" 
                        variant="h5"
                        onClick={()=>setDeleteTriggered(true)}
                    >
                        Delete Account
                    </Typography>
                    {deleteTriggered && (
                        <DeletePopup 
                            setDeleteTriggered={setDeleteTriggered} 
                        />
                    )}
                </div>
        // </MoneyBuddyTheme>
    )
}

export default withSnackbar(AccountPage)




// for mobile friendly experience, budget categories should be collabsible panels with default setting as closed

// imagine panel on the left containing "links" in dropdown to open various "pages" in the main page
// all pages would render on the main dashboard page