import React from 'react'

const NavbarWrapper = (props) => {

    const { type } = props 

    const defaultClasses = [
        "navbar",
        "linkbar",
        "container", 
        "unordered-links"
    ]

    const mobileClasses = [
        "mobile-navbar",
        "linkbar mobile",
        "container mobile", 
        "unordered-links mobile"
    ]

    const classes = type === "mobile" ? mobileClasses : defaultClasses

    return (
        <nav className={classes[0]}>
            <div className={classes[1]}>
                <div className={classes[2]}>
                    <ul className={classes[3]}>
                        {props.children}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarWrapper
