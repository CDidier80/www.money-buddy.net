import CustomTextfield from "./CustomTextfield"
import React from 'react'
import { TextField } from "@material-ui/core"

const ReenterPasswordField = ({setReenterPassword, reenteredPassword}) => {
    return (
        <TextField 
            onChange={(e)=>setReenterPassword(e.target.value)} 
            value={reenteredPassword}
            label="Reenter Password" 
            name='reenter password'
            variant="outlined"
            type="password"
            margin="normal" 
            id="password"
            fullWidth 
        />
    )
}

export default ReenterPasswordField
