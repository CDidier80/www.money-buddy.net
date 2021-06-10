import { useSignoutLinkStyles } from "../styles/navbarStyles"
import { Link } from 'react-router-dom'
import React from 'react'


const SignOutLink = props => {

    const { setAuthenticated, setUser } = props

    const logOut = (e) => {
        setAuthenticated(false)
        setUser({})
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
