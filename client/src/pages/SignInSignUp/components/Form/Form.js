import { staticStyles, formFont } from "./styles/useStyles"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import FormControl from "./components/FormControl"
import React, { useState, useEffect }from 'react'
import { makeStyles, } from '@material-ui/core/'
import LockedOut from './components/LockedOut'
import FormBody from "./components/FormBody"
import Header from "./components/Header"


const Form = (props) => {

    const { fromApp, history } = props

    const [isSigningUp, toggleSigningUp] = useState(true)

    useEffect(() => {
        if (typeof props.location.state == "undefined") {
            return
        } else {
            const { signingUp } = props.location.state
            toggleSigningUp(signingUp ? true : false)
        }
    }, [])


    const medQuery = (style1, style2) => matches ? style1 : style2
    const matches = useMediaQuery('(max-height:730px)')

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: medQuery("3vh auto 3vh auto", "0 auto"),
            position: medQuery("relative", null),
            paddingTop: medQuery("0","10vh"),
            maxHeight: "830px",
            minWidth: "300px",
            maxWidth: "410px",
            height: '70%',
            width: '50%',
            ...formFont,
        },
        paperRoot: {
            maxHeight: medQuery("600px", null),
            borderRadius: "12px",
            ...formFont,
        },
        textfield: {
            "& .MuiFilledInput-root": {
                background: "rgb(black)"
            }
        },
        ...staticStyles,

    }))

    const classes = useStyles()

    const propsFormBody = {
        child3: FormControl,
        child1: LockedOut,
        toggleSigningUp,
        child2: Header,
        isSigningUp,
        classes,
    }

    const forSubmit = {
        isSigningUp,
        ...fromApp,
        history,
        classes,
    }

    return  <FormBody {...propsFormBody} forSubmit={{...forSubmit}}/> 
}

export default Form