import { Typography, FormControlLabel, Checkbox } from '@material-ui/core/'
import React from 'react'

const RememberMe = ({classes}) => {

    return (
        <FormControlLabel 
            color="primary" 
            aria-hidden="false"
            label={(
                <Typography className={classes.rememberMe} >
                    Remember me
                </Typography>
            )}
            control={ <Checkbox value="remember" color="primary" /> }
        />
    )
}

export default RememberMe
