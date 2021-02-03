import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar } from '@material-ui/core/'
import React from 'react'


const LockedOut = ({classes}) => {

    const backgroundColor = { backgroundColor: "#fdbb2d" }

    return (
        <Avatar 
            className={classes.avatar}
            style={backgroundColor}
        >
            <LockOutlinedIcon />
        </Avatar>
    )
}

export default LockedOut
