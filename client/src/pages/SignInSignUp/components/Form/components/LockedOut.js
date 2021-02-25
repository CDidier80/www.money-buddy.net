import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar } from '@material-ui/core/'
import React from 'react'


const LockedOut = ({classes}) => {

    return (
        <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
        </Avatar>
    )
}

export default LockedOut
