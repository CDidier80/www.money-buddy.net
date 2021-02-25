import { Button } from '@material-ui/core/'
import React from 'react'

const DelButton = (props) => {

    const { deleteButton, deleteHandler, deleteText } = props

    return (
        <Button 
            className={deleteButton}
            onClick={(e) => deleteHandler(e)}
        >
            { deleteText }
        </Button>
    )
}

export default DelButton
