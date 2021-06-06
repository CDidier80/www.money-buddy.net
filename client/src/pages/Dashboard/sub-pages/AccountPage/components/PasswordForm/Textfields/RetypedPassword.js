import PasswordField from "./PasswordField"
import React from 'react'

const RetypedPassword = (props) => {

    const passwordFieldProps = {
        setHook: props.setReenteredNewPassword,
        label: "Reenter New Password",
    }

    return (
        <PasswordField 
        {...passwordFieldProps}
            { ...props }
        />
    )
}

export default RetypedPassword
