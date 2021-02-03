import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebarlink.css"

const SidebarLink = (props) => {

    const {
        pathname: navPath, 
        label, 
        query,
        icon
    } = props.navItem

    const {pathname: locPath} = props.location

    const selected = navPath === locPath ? 'selected' : '';

    return (
        <li 
            className={`list-item ${selected}`} 
            key={navPath + "hello"}
        >
            <Link 
                className="list-link" 
                to={{ pathname: navPath, query: query}}
            >
                { icon }
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default SidebarLink
