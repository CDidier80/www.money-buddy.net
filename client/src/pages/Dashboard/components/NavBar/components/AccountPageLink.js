import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { IconButton } from '@material-ui/core'
import React from 'react'

const AccountPageLink = (props) => {
    return (
        <IconButton 
            onClick={()=> props.history.push("/dashboard/account")}>
            <AccountCircleIcon                     
                className="account-icon" 
                htmlColor={blueGrey[50]}
                fontSize="default" 
            />
        </IconButton> 
    )
}

export default AccountPageLink
