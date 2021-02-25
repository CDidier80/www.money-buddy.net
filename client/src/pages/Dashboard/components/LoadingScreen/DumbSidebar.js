import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star'
import { Link } from 'react-router-dom';
import React from 'react';


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
            { 
                pathname: '/dashboard/retirement', 
                label: 'Retirement', 
                icon: <StarIcon fontSize="inherit" className="sidebar-icon"/>  
            },
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
