import { TextField, } from '@material-ui/core/'
import React from 'react'

const PasswordField = (props) => {

    const {label, setHook} = props
    const {updateField} = props.fromAccountPage

    return (
        <TextField 
            fullWidth
            variant="outlined" 
            margin="normal"  
            label={label} 
            name="password" 
            type="password"
            id="password" 
            onChange={(e)=>updateField(e, setHook)} 
        />
    )
}

export default PasswordField
