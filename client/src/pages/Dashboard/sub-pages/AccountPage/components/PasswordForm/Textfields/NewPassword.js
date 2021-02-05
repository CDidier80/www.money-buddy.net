import PasswordField from "./PasswordField"
import React from 'react'

const NewPassword = (props) => {

    const passwordFieldProps = {
        setHook: props.setNewPassword,
        label: "New Password",
    }

    return (
        <PasswordField 
            {...passwordFieldProps}
            {...props}
        />
    )
}

export default NewPassword
