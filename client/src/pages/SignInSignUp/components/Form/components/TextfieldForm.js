import { TextField, makeStyles } from '@material-ui/core/'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    textfield: {
        "& .MuiOutlinedInput-notchedOutline": {
            backgroundColor: "black"
        }
    }

}))
const TextFieldForm = ({role, onChange}) => {
    const classes = useStyles()
    return (
        <TextField 
            id={role}
            fullWidth 
            name={role}
            type={role}
            margin="normal" 
            variant="outlined"
            onChange={onChange}
        />
    )
}

export default TextFieldForm
