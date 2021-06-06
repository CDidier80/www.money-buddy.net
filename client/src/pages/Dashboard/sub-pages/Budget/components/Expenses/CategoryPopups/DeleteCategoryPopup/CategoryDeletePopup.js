import React, { useState } from 'react'
import DeletePrompt from './DeletePrompt'
import { useModalStyles } from "../styles"
import  DialogWrapper from "./DialogWrapper"
import  ButtonWrapper from "./Buttons/ButtonWrapper"
import { DialogContent } from '@material-ui/core'


const CategoryDeletePopup = (props) => {

    const classes = useModalStyles(props.theme)

    const [open, ] = useState(true)

    const handleDialogClick = e => {
        e.stopPropagation()
    }

    const newProps = {...props, classes: classes}

    return (
            <DialogWrapper
                onClick={handleDialogClick}
                open={open}	
            >
                <DialogContent className={classes.dialog} >
                    <DeletePrompt  {...newProps} />
                    <ButtonWrapper {...newProps} />
                </DialogContent>
            </DialogWrapper>

    )
}

export default CategoryDeletePopup