import React from 'react'
import CustomTextfield from "./CustomTextfield"

const PasswordTextfield = ({setPassword, isSigningUp, password}) => {

    const [ correctPrompt, autocompleteSetting ] = isSigningUp ? 
                                        ["Choose Password", "off"] : 
                                        ["Password", "current-password"]
    return (
        <CustomTextfield 
            onChange={(e)=>setPassword(e.target.value)} 
            autoComplete={autocompleteSetting}
            label={correctPrompt}
            role={"password"}
            value={password}
            required                                 
        />
    )
}

export default PasswordTextfield
