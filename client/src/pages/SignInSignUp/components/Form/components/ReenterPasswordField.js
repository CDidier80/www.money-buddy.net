import { TextField, Fade } from "@material-ui/core"
import React from 'react'

const ReenterPasswordField = ({setReenterPassword, reenteredPassword}) => {
    return (
        <Fade in={true}>
            <TextField 
                onChange={(e) => setReenterPassword(e.target.value)} 
                value={reenteredPassword}
                label="Reenter Password" 
                name='reenter password'
                variant="outlined"
                type="password"
                margin="normal" 
                id="password"
                fullWidth 
            />
        </ Fade>

    )
}

export default ReenterPasswordField
