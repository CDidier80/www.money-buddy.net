import React from 'react'
import ThemedButton from '../../../../../TopLevelComponents/ThemedButton'
const { signup, signin } = require("../modules/formFunctions") 

const SubmitButton = (props) => {

    const {
        reenteredPassword,
        setUserInfo, 
        isSigningUp,
        password, 
        setAuth, 
        history,
        email,
    } = props
    
    
    const signUp = async (e) => {
        e.preventDefault()
        if (isSigningUp) {
            const args = {
                reenteredPassword,
                setUserInfo, 
                password, 
                setAuth, 
                email
            }
            const signedUp = await signup(args)
            signedUp && history.push('/dashboard')
        }
    }
    
    
    const signIn = async (e) => {
        e.preventDefault()
        const args = {
            history: history,
            setUserInfo, 
            password,
            setAuth, 
            email, 
        }
        await signin(args)
    }
    
    const correctPrompt = isSigningUp ? "Confirm and Sign Up": "Sign In"
    const correctSubmitFunction = isSigningUp ? signUp : signIn
    
    return (
        <ThemedButton 
            onClick={(e)=>correctSubmitFunction(e)}
        >
            {correctPrompt}
        </ThemedButton>
    )
}

export default SubmitButton
