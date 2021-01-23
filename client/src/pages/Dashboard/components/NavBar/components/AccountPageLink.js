import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { IconButton } from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'


const AccountPageLink = (props) => {
    return (
        <IconButton 
            onClick={()=> props.history.push("/dashboard/account")}>
            <AccountCircleIcon                     
                className="account-icon" 
                fontSize="default" 
                htmlColor={blueGrey[50]}
            />
        </IconButton> 
    )
}

export default AccountPageLink
