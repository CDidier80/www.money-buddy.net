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
            onChange={(e)=>setEmail(e.target.value)}
            className={classes.textfield}
        />
    )
}

export default EmailTextfield
