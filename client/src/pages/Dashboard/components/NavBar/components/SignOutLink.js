import { Link } from 'react-router-dom'
import React from 'react'

const SignOutLink = (props) => {

    const {setAuth, setUserInfo} = props.fromApp

    const logOut = (e) => {
        setAuth(false)
        setUserInfo(null)
        localStorage.clear()
        props.history.push("/")
    }

    return (
        <Link 
            className="sign-out-link" 
            onClick={()=>logOut()}
            to="#"
        >
            Sign Out
        </Link>
    )
}

export default SignOutLink
