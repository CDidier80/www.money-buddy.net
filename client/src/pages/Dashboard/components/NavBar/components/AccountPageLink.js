import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useAccountLinkStyles } from "../styles/navbarStyles"
import blueGrey from '@material-ui/core/colors/blueGrey'
import { IconButton } from '@material-ui/core'
import React from 'react'


const AccountPageLink = (props) => {

    const {
        theme, 
        history, 
        setColoredLinks, 
        coloredAccountIcon,
        setColoredAccountIcon,
    } = props

    const { accountLink, iconButton } = useAccountLinkStyles(theme, coloredAccountIcon)

    const goToAccountPage = () => {
        setColoredLinks(false)
        setColoredAccountIcon(true)
        history.push("/dashboard/account")
    }

    return (
        <IconButton 
            onClick={goToAccountPage}
            className={iconButton}
        >
           <AccountCircleIcon                     
                htmlColor={blueGrey[50]}
                className={accountLink}
                fontSize="default" 
            />
        </IconButton> 

    )
}

export default AccountPageLink
