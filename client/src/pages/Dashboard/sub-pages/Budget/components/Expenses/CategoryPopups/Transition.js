import React, { forwardRef } from 'react'
import { Slide } from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} { ...props } />;
})

export default Transition
