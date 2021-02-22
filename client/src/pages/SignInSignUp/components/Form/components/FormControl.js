import ReenterPasswordField   from   "./ReenterPasswordField"
import PasswordTextfield      from   "./PasswordTextfield"
import EmailTextfield         from   "./EmailTextfield"
import AccountPrompt          from   "./AccountPrompt"
import SubmitButton           from   "./SubmitButton"
import RememberMe             from   "./RememberMe"
import Copyright              from   "./Copyright"
import {useState}             from   "react"
import React                  from   "react"


const FormControl = (props) => {

    const { 
        toggleSigningUp, 
        setUserInfo,
        isSigningUp, 
        setAuth,
        history,
        classes, 
    } = props

    const [reenteredPassword, setReenterPassword] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const forAll = {
        isSigningUp,
        classes,
    }

    const propsEmailField = {
        ...forAll,
        setEmail,
        email,
    }

    const propsPasswordField = {
        setPassword,
        ...forAll,
        password,
    }

    const propsReenterField = {
        setReenterPassword,
        reenteredPassword
    }

    const propsSubmitButton = {
        reenteredPassword,
        setUserInfo,
        ...forAll,
        password,
        setAuth,
        history,
        email,
    }


    const propsAccountPrompt = {
        toggleSigningUp,
        ...forAll,
    }

    const onlyClasses = {
        classes
    }

    return (
        <form className={classes.form} noValidate>
            <EmailTextfield    {...propsEmailField}    />
            <PasswordTextfield {...propsPasswordField} />
            { isSigningUp && <ReenterPasswordField {...propsReenterField} /> }
            <RememberMe        {...onlyClasses}        />
            <SubmitButton      {...propsSubmitButton}  />
            <AccountPrompt     {...propsAccountPrompt} />
            {/* <Copyright /> */}
        </form>
    )
}

export default FormControl
