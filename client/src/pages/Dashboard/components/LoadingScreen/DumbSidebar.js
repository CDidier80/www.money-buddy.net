
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const DumbSidebar = (props) => {


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
        <aside className="sidebar">
            <ul className="list" >
                {navItems.map((navItem) => {
                    return (
                        <li className={`list-item`} key={navItem.pathname}>
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

export default DumbSidebar
