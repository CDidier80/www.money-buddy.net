import { DialogTitle, makeStyles } from '@material-ui/core'
import { usePopupHeaderStyles } from "./modalStyles"
import React from 'react'


const PopupHeader = ({theme}) => {
    
    const { header } = usePopupHeaderStyles(theme)

    return (
        <DialogTitle 
            id="alert-dialog-slide-title"
            className={header}
            disableTypography={true}
        > 
            A quick note...
        </DialogTitle>
    )
}

export default PopupHeader
