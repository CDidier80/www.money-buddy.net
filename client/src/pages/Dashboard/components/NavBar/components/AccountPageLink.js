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
                fontSize="default" 
                htmlColor={blueGrey[50]}
            />
        </IconButton> 
    )
}

export default AccountPageLink
