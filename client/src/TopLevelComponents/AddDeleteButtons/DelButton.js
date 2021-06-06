import { Button } from '@material-ui/core/'
import React from 'react'

const DelButton = props => {

    const { 
        iconsDisplayed,
        deleteHandler, 
        buttonStyles,
        deleteText, 
        classes
     } = props
     
    const className = iconsDisplayed ? 
        classes.delButtonIconsToggled : 
        classes.delButtonNoIcons

    return (
        <Button 
            style={buttonStyles}
            className={className}
            onClick={(e) => deleteHandler(e)}
        >
            { deleteText }
        </Button>
    )
}

export default DelButton
