import RetypedPassword from './Textfields/RetypedPassword'
import NewPassword from "./Textfields/NewPassword"
import { makeStyles } from '@material-ui/styles'
import PasswordButton from "./PasswordButton"
import React, { useState } from 'react'
import Header from "./Header"


const PasswordForm = (props) => {


    const [newPassword, setNewPassword ] = useState("")
    const [reenteredNewPassword, setReenteredNewPassword ] = useState("")

    const buttonProps = {
        newPassword,
        reenteredNewPassword
    }

    const useStyles = makeStyles(theme => ({
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            backgroundColor: "rgba(255,255,255)",
            marginBottom: "20px",
            ...props.formFont
        }
    }))

    const classes = useStyles

    return (
        <>
            <Header />
            <form 
                className={classes.form} 
                noValidate
            >
                <NewPassword 
                    {...props}
                    setNewPassword={setNewPassword}
                />
                <RetypedPassword 
                    {...props}
                    setReenteredNewPassword={setReenteredNewPassword}
                />
                <PasswordButton 
                    {...props} 
                    fromPasswordForm={{...buttonProps}}
                />
            </form>
        </>
    )
}

export default PasswordForm
