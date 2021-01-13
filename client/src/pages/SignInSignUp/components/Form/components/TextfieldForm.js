import React from 'react'
import { TextField } from '@material-ui/core/'


const TextFieldForm = ({role}) => {
    return (
        <TextField 
            fullWidth 
            variant="outlined"
            margin="normal" 
            name={role}
            type={role}
            id={role}
        />
    )
}

export default TextFieldForm
