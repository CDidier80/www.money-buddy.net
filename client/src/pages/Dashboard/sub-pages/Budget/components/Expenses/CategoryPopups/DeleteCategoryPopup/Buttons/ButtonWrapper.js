import React from 'react'
import CancelButton from './CancelButton'
import ConfirmButton from './ConfirmButton'
import { DialogActions } from '@material-ui/core'

const ButtonWrapper = (props) => {
    return (
        <DialogActions className={props.classes.buttonWrapper} >
            <ConfirmButton { ...props } />
            <CancelButton  { ...props } />
        </DialogActions>
    )
}

export default ButtonWrapper
