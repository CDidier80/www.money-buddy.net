import React from 'react'
import { withTheme, } from '@material-ui/core/'
import FormWrapper from './FormWrapper.tsx'

const FormBody = props => {

    const {
        child3: FormControl,
        child1: LockedOut,
        child2: Header,
        isSigningUp,
        forSubmit,
        classes,
    } = props

    const forFormControl = {
        ...forSubmit,
    }

    const forHeader = {
        isSigningUp,
        classes, 
    }

    return (
        <FormWrapper classes={classes}>
            <LockedOut classes={classes} />
            <Header {...forHeader} />
            <FormControl {...forFormControl} />
        </FormWrapper>
    )
}

export default withTheme(FormBody)
