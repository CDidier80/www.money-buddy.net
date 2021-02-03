import EmailTextfield from "./components/EmailTextfield"
import EmailHeader from "./components/EmailHeader"
import EmailButton from "./components/EmailButton"
import { makeStyles } from '@material-ui/core/'
import React, { useState } from 'react'

const EmailForm = (props) => {

    const [newEmail, setNewEmail ] = useState("")

    const useStyles = makeStyles(theme => ({
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            backgroundColor: "rgba(255,255,255)",
            marginBottom: "20px",
            ...props.formFont
        }
    }))

    const classes = useStyles()


    return (
        <>
            <EmailHeader />
            <form 
                className={classes.form} 
                noValidate
            >
                <EmailTextfield 
                    {...props}
                    setNewEmail={setNewEmail}
                />
                
                <EmailButton 
                    {...props}
                    newEmail={newEmail}
                />
            </form>
    </>
    )
}

export default EmailForm
