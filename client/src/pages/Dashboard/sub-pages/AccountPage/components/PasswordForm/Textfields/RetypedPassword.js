import React from 'react'
import PasswordField from "./PasswordField"

const RetypedPassword = (props) => {

    const passwordFieldProps = {
        label: "Reenter New Password",
        setHook: props.setReenteredNewPassword
    }

    return (
        <PasswordField 
            {...props}
            {...passwordFieldProps}
        />
    )
}

export default RetypedPassword
