import { useMoneyBuddyLinkStyles } from "../styles/navbarStyles"
import { Link } from 'react-router-dom'
import React from 'react'


const MoneyBuddyLink = ({theme}) => {

    const { titleLink, money } = useMoneyBuddyLinkStyles(theme)

    return (
        <Link to="/" className={titleLink}>
            <span className={money}>Money</span>
            Buddy
        </Link> 
    )   
    
}



export default MoneyBuddyLink
