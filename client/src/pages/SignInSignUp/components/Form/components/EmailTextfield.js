import CustomTextfield from "./CustomTextfield"
import React from 'react'

const EmailTextfield = ({classes, setEmail, email, submitForm}) => {

    return (
        <form 
            onSubmit={(e) => submitForm(e)}
            className={classes.form}
        >
            <CustomTextfield
                required 
                autoFocus
                value={email}
                role={"email"}
                autoComplete="email"  
                label="Email Address" 
                className={classes.textfield}
                onSubmit={(e) => submitForm(e)}
                onChange={(e)=>setEmail(e.target.value)}
            />

        </form>
    )
}

export default EmailTextfield
