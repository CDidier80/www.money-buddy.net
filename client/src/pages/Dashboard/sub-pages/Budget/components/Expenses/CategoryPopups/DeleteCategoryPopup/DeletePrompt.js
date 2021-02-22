import { DialogTitle } from '@material-ui/core'
import React from 'react'


const DeletePrompt = (props) => {

    const { category } = props.fromExpenseAccordion
    
    return (
        <DialogTitle 
            disableTypography={true}
            className={props.classes.header}
            id="alert-dialog-slide-title"
        >
            Delete "
                <span className={props.classes.span} >
                    { category.name }
                </span>
                "?
        </DialogTitle>
    )
}

export default DeletePrompt
