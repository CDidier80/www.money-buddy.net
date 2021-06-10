import React from 'react'
import CustomTextfield from "./CustomTextfield"

const PasswordTextfield = props => {

    const {setPassword, isSigningUp, password, classes, submitForm} = props

    return (
        <form
            onSubmit={(e) => submitForm(e)}
            className={classes.form}
        >
            <CustomTextfield
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete={isSigningUp ? "off" : "current-password"}
                label={isSigningUp ? "Choose Password" : "Password"}
                role={"password"}
                value={password}
                required
            />
        </form>
    )
}

export default PasswordTextfield
