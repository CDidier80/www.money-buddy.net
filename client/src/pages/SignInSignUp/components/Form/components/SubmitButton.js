import React from 'react'
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
    
    const correctPrompt = isSigningUp ? "CONFIRM AND SIGN UP": "SIGN IN"
    const correctSubmitFunction = isSigningUp ? signUp : signIn
    
    return (
        <button 
            className="submitButton"
            onClick={(e)=>correctSubmitFunction(e)}
        >
            {correctPrompt}
        </button>
    )
}

export default SubmitButton
