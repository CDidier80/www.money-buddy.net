import React from 'react'
import { Link } from 'react-router-dom'

const SignOutLink = (props) => {

    const { setAuth, setUserInfo, setSessionValid } = props.fromApp

    const logOut = (e) => {
        setAuth(false)
        setUserInfo(null)
        setSessionValid(false)
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
