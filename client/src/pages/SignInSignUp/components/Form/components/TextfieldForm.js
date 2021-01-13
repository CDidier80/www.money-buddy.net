import React from 'react'
import { TextField } from '@material-ui/core/'


const TextFieldForm = (props) => {
    const {role} = props
    return (
        <TextField 
            fullWidth 
            variant="outlined"
            margin="normal" 
            name={role}
            type={role}
            id={role}
            onChange={props.onChange}
        />
    )
}

export default TextFieldForm
