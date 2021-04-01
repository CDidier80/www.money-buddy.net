import React from 'react'
import CustomTextfield from "./CustomTextfield"

const PasswordTextfield = (props) => {

    const {setPassword, isSigningUp, password, classes, submitForm} = props

    const [ correctPrompt, autocompleteSetting ] = isSigningUp ? 
                                        ["Choose Password", "off"] : 
                                        ["Password", "current-password"]
    return (
        <form 
            onSubmit={(e) => submitForm(e)}
            className={classes.form}
        >
            <CustomTextfield 
                onChange={(e)=>setPassword(e.target.value)} 
                autoComplete={autocompleteSetting}
                label={correctPrompt}
                role={"password"}
                value={password}
                required                                 
            />
        </form>
    )
}

export default PasswordTextfield
