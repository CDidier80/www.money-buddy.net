import { TextField } from '@material-ui/core/'
import React from 'react'

const CustomTextfield = ({role, onChange}) => {
    return (
        <TextField 
            id={role}
            fullWidth 
            name={role}
            type={role}
            label={role}
            margin="normal" 
            variant="outlined"
            onChange={onChange}
        />
    )
}

export default CustomTextfield
