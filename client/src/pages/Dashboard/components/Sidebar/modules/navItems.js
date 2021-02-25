import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import HomeIcon from '@material-ui/icons/Home'
import StarIcon from '@material-ui/icons/Star'
import React from 'react'

export const navItems = [
    { 
        label: 'Home', 
        pathname: '/', 
        icon: <HomeIcon fontSize="inherit" className="sidebar-icon"/> 
    },
    { 
        label: 'Budget', 
        pathname: '/dashboard/', 
        icon: <DonutLargeIcon fontSize="inherit" className="sidebar-icon"/>, 
    },
    { 
        label: 'Cash Flow', 
        pathname: '/dashboard/cashflow', 
        icon: <LocalAtmIcon fontSize="inherit" className="sidebar-icon"/>  
    },
    { 
        label: 'Retirement', 
        pathname: '/dashboard/retirement', 
        icon: <StarIcon fontSize="inherit" className="sidebar-icon"/>  
    },
]