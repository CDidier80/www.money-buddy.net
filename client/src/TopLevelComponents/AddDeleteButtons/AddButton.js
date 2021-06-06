import {  Button } from '@material-ui/core/'
import React from 'react'


const AddButton = props => {

    const { 
        addText, 
        addButton, 
        addHandler, 
        buttonStyles
     } = props

    return (
        <Button 
            style={buttonStyles}
            className={addButton}
            onClick={(e) => addHandler(e)}
        >
            { addText }
        </Button>
    )
}

export default AddButton
