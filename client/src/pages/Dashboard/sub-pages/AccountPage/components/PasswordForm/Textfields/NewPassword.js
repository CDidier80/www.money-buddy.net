import React from 'react'
import PasswordField from "./PasswordField"

const NewPassword = (props) => {

    const passwordFieldProps = {
        label: "New Password",
        setHook: props.setNewPassword
    }

    return (
        <PasswordField 
            {...props}
            {...passwordFieldProps}
        />
    )
}

export default NewPassword
