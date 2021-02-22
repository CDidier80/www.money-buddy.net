import {  Button } from '@material-ui/core/'
import React from 'react'


const AddButton = (props) => {

    const { addButton, addHandler, addText } = props

    return (
        <Button 
            className={addButton}
            onClick={(e) => addHandler(e)}
        >
            { addText }
        </Button>
    )
}

export default AddButton
