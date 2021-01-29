import React from 'react'

const AccountPrompt = ({classes, isSigningUp, toggleSigningUp}) => {

    const accountPrompt = isSigningUp ? 
                        "Already have an account?  Sign in" : 
                        "Don't have an account?  Sign up" 

    return (
        <div className={classes.prompt}>
            <p 
                onClick={() => toggleSigningUp(!isSigningUp)}
            > 
                { accountPrompt } 
            </p>
        </div>
    )
}

export default AccountPrompt
