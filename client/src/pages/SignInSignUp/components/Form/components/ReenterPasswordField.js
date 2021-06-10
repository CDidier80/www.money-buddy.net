import { TextField, Fade } from "@material-ui/core"
import React from 'react'

const ReenterPasswordField = props => {

    const { setReenterPassword, reenteredPassword, classes, submitForm } = props

    return (
        <Fade in={true}>
            <form 
                onSubmit={(e) => submitForm(e)}
                className={classes.form}
            >
                <TextField 
                    onChange={(e) => setReenterPassword(e.target.value)} 
                    value={reenteredPassword}
                    label="Reenter Password" 
                    name='reenter password'
                    id="reenter-password"
                    variant="outlined"
                    type="password"
                    margin="normal" 
                    fullWidth 
                />
            </form>
        </ Fade>

    )
}

export default ReenterPasswordField
