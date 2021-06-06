import { TextField } from '@material-ui/core/'
import React from 'react'

const EmailTextfield = props => {

    const { updateField } = props.fromAccountPage
    const { setNewEmail } = props

    return (
        <TextField 
            required 
            autoFocus
            fullWidth 
            id="email" 
            name="email" 
            type="email" 
            margin="normal" 
            variant="outlined" 
            autoComplete="email"  
            label="Email Address" 
            onChange={(e)=>updateField(e, setNewEmail)}
        />
    )
}

export default EmailTextfield
