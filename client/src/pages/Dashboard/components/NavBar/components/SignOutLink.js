import React from 'react'
import { Link } from 'react-router-dom'

const SignOutLink = (props) => {

    const logOut = (e) => {
        props.setAuth(false)
        props.setUserInfo(null)
        localStorage.clear()
        props.history.push("/")
    }

    return (
        <Link 
            className="sign-out-link" 
            to="#"
            onClick={()=>logOut()}
        >
            Sign Out
        </Link>
    )
}

export default SignOutLink
