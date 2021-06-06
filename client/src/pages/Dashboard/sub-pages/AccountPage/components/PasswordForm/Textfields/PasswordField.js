import { TextField, } from '@material-ui/core/'
import React from 'react'

const PasswordField = props => {

    const {label, setHook} = props
    const {updateField} = props.fromAccountPage

    return (
        <TextField 
            onChange={(e)=>updateField(e, setHook)} 
            variant="outlined" 
            margin="normal"  
            name="password" 
            type="password"
            id="password" 
            label={label} 
            fullWidth
        />
    )
}

export default PasswordField
