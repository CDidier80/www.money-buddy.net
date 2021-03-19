import { StyledTextField } from "../../styles"
import React from 'react'

const Text = (props) => {

    const { error, setText, setError } = props
    
    const updateText = (e) => {
        const { value } = e.target
        if (value.length < 40) setText(value)
        if (error) setError(false)
    }

    return (
        <StyledTextField
            fullWidth
            autoFocus
            error={error}
            margin="dense"
            id="category-name"
            onChange={(e)=>updateText(e)}
            label={(error ? "This name already exists" : "category name")}
            // helperText={`This category already exists`}
        />
    )
}

export default Text
