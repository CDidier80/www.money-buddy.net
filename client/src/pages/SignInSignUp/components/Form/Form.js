import { useLoginFormStyles } from "./styles/useStyles"
import FormControl from "./components/FormControl"
import React, { useState, useEffect }from 'react'
import LockedOut from './components/LockedOut'
import { withTheme} from '@material-ui/core/'
import FormBody from "./components/FormBody"
import Header from "./components/Header"


const Form = (props) => {

    const { fromApp, history } = props

    const [isSigningUp, toggleSigningUp] = useState(true)

    useEffect(() => {
        if (typeof props.location.state == "undefined") return
            const { signingUp } = props.location.state
            toggleSigningUp(signingUp ? true : false)
    }, [])

    const classes = useLoginFormStyles()

    const propsFormBody = {
        child3: FormControl,
        child1: LockedOut,
        toggleSigningUp,
        child2: Header,
        isSigningUp,
        classes,
    }

    const forSubmit = {
        toggleSigningUp,
        isSigningUp,
        ...fromApp,
        history,
        classes,
    }

    return  <FormBody {...propsFormBody} forSubmit={{...forSubmit}} /> 
}

export default withTheme(Form)