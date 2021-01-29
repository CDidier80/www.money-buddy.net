import React from 'react'
import CustomTextfield from "./CustomTextfield"

const PasswordTextfield = ({setPassword, isSigningUp, password}) => {

    const [ correctPrompt, autocompleteSetting ] = isSigningUp ? 
                                        ["Choose Password", "off"] : 
                                        ["Password", "current-password"]
    return (
        <CustomTextfield 
            autoComplete={autocompleteSetting}
            onChange={(e)=>setPassword(e.target.value)} 
            label={correctPrompt}
            value={password}
            role={"password"}
            required                                 
        />
    )
}

export default PasswordTextfield
