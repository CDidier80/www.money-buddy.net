import { useSignoutLinkStyles } from "../styles/navbarStyles"
import { Link } from 'react-router-dom'
import React from 'react'


const SignOutLink = (props) => {

    const { setAuth, setUserInfo } = props.fromApp

    const logOut = (e) => {
        setAuth(false)
        setUserInfo(null)
        localStorage.clear()
        props.history.push("/")
    }


    const { link } = useSignoutLinkStyles(props.theme)

    return (
        <Link 
            onClick={()=>logOut()}
            className={link}
            to="#"
        >
            Sign Out
        </Link>
    )
}

export default SignOutLink
