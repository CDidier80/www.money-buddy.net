import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import HomeIcon from '@material-ui/icons/Home'
import StarIcon from '@material-ui/icons/Star'
import React from 'react'


export const navItems = [
    { 
        pathname: '/', 
        label: 'Home', 
        icon: <HomeIcon fontSize="inherit" className="sidebar-icon"/> 
    },
    { 
        pathname: '/dashboard/', 
        label: 'Budget', 
        icon: <DonutLargeIcon fontSize="inherit" className="sidebar-icon"/> 
    },
    { 
        pathname: '/dashboard/cashflow', 
        label: 'Cash Flow', 
        icon: <LocalAtmIcon fontSize="inherit" className="sidebar-icon"/>  
    },
    { 
        pathname: '/dashboard/retirement', 
        label: 'Retirement', 
        icon: <StarIcon fontSize="inherit" className="sidebar-icon"/>  
    },
    // { 
    //     pathname: '/dashboard/markets', 
    //     label: 'Markets', 
    //     icon: <TrendingUpIcon fontSize="inherit" className="sidebar-icon"/>  
    // },
    // { pathname: '/summary', label: 'About', icon: 'info' },
    // { pathname: '/about', label: 'About', icon: 'info' },
]