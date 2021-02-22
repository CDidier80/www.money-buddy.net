import CategoryTextfield from "./CategoryTextField/Text"
import ButtonWrapper from "./Buttons/ButtonWrapper"
import { makeAddCategoryStyles } from "../styles"
import { DialogContent } from '@material-ui/core'
import DialogWrapper from "./DialogWrapper"
import React, { useState } from 'react'
import Prompt from "./Prompt"



const CategoryPopup = (props) => {
    
    /*  State */

    const [text, setText] = useState("")
    const [open, setOpen] = useState(true)
    const [error, setError] = useState(false)


     /*  FUNCTIONS  */
    
    const classes = makeAddCategoryStyles(props.theme)

    const propsCategoryTF = { ...props, error, setText, setError, classes }
    const propsButtonWrapper = { ...props, text, setError, classes }

    return (
        <DialogWrapper
            onClick={e => e.stopPropagation()}
            open={open}	
        >
            <DialogContent className={classes.dialog}>
                <Prompt classes={classes} />
                <CategoryTextfield {...propsCategoryTF} /> 
                <ButtonWrapper {...propsButtonWrapper} />
            </DialogContent>
        </DialogWrapper>
    )
}

export default CategoryPopup