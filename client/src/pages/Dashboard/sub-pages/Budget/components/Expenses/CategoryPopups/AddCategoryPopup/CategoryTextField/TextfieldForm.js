import { DialogContent } from '@material-ui/core'
import React from 'react'

const TextfieldForm = props => {
    return (
        <DialogContent>
            <form>
                {props.children}
            </form>
        </DialogContent>
    )
}

export default TextfieldForm


{/* <form onSubmit={(e) => confirm(e)}> */}
