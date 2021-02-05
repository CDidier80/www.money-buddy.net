import CustomTextfield from "./CustomTextfield"
import React from 'react'

const EmailTextfield = ({classes, setEmail, email}) => {

    return (
        <CustomTextfield
            required 
            autoFocus
            value={email}
            role={"email"}
            autoComplete="email"  
            label="Email Address" 
            className={classes.textfield}
            onChange={(e)=>setEmail(e.target.value)}
        />
    )
}

export default EmailTextfield
