import AccountPageLink from "./components/AccountPageLink"
import MoneyBuddyLink from "./components/MoneyBuddyLink"
import SignOutLink from "./components/SignOutLink"
import Burger from "./components/Burger"
import React from 'react'

const NavBar = (props) => {

    // const [size, setSize] = useState(`X: ${window.innerWidth}  Y: ${window.innerHeight}`)

    // const reportSize = (e) => {
    //     setSize(`${window.innerWidth} x ${window.innerHeight}`)
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", reportSize)
    //     return () => {
    //         window.removeEventListener("resize", reportSize)
    //     }
    // }, [])
    
    return (
        <nav className="dash-navbar">
            <MoneyBuddyLink  {...props} />
            <Burger          {...props} />
            <SignOutLink     {...props} />
            <AccountPageLink {...props} />
        </nav>
    )
}

export default NavBar




{/* <h2 style={{color:"white", fontSize:"25px"}}>{size}</h2> */}
