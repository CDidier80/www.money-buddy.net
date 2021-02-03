import CustomTextfield from "./CustomTextfield"
import React from 'react'

const ReenterPasswordField = ({setReenterPassword, reenteredPassword}) => {
    return (
        <CustomTextfield 
            onChange={(e)=>setReenterPassword(e.target.value)} 
            value={reenteredPassword}
            label="Reenter Password" 
            role={"password"}
        />
    )
}

export default ReenterPasswordField
