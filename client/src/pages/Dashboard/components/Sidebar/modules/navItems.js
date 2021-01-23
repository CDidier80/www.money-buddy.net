import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

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
        // { pathname: '/summary', label: 'About', icon: 'info' },
        // { pathname: '/about', label: 'About', icon: 'info' },
    ]