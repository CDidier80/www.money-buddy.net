
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const SideBar = (props) => {

    const isSelected = (navItem) => {
        return props.location.pathname === navItem.pathname ? 'selected' : '';
    }


    const navItems = [
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


    return (
        <aside className={props.narrow ? "sidebar narrowed" : "sidebar"} >
            <ul className="list" >
                {navItems.map((navItem) => {
                    return (
                        <li className={`list-item ${isSelected(navItem)}`} key={navItem.pathname}>
                            <Link className="list-link" to={{ pathname: navItem.pathname, query: navItem.query }}>
                                {navItem.icon}
                                <span>{navItem.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default SideBar
