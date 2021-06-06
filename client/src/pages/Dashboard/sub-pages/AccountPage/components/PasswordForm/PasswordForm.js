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
        reenteredNewPassword,
        newPassword,
    }

    const useStyles = makeStyles(theme => ({
        form: {
            backgroundColor: "rgba(255,255,255)",
            marginTop: theme.spacing(1),
            marginBottom: "20px",
            ...props.formFont,
            width: '100%', 
        }
    }))

    const classes = useStyles(props.theme)

    return (
        <>
            <Header { ...props }/>
            <form 
                className={classes.form} 
                noValidate
            >
                <NewPassword 
                    { ...props }
                    setNewPassword={setNewPassword}
                />
                <RetypedPassword 
                    { ...props }
                    setReenteredNewPassword={setReenteredNewPassword}
                />
                <PasswordButton 
                    { ...props } 
                    fromPasswordForm={{...buttonProps}}
                />
            </form>
        </>
    )
}

export default PasswordForm
