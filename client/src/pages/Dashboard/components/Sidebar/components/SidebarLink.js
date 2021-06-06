import { useSidebarLinkStyles } from "./sidebarLinkStyles"
import { Link } from 'react-router-dom'
import "./sidebarlink.css"
import React from 'react'

const SidebarLink = props => {

    /* props */

    const { 
        index, 
        navItem,
        lastClicked, 
        setColoredLinks,
        setSelectedLinkIndex, 
        setColoredAccountIcon,
    } = props

    const { icon, query, label, pathname: navPath } = navItem

    /* styles */

    const linkHoverColor = props.index > 2 ? "primaryTeal" : "secondary"

    const { listItem, listLink } = useSidebarLinkStyles(props.theme, linkHoverColor, lastClicked)

    const handleLinkClick = (e) => {
        // ensure nothing happens if link already selected
        if (lastClicked) return 
        setSelectedLinkIndex(index)
        setColoredAccountIcon(false)
        setColoredLinks(true)
    }

    const linkProps = {
        onClick: (e) => handleLinkClick(e),
        className: listLink,
        to: {
            pathname: navPath,
            query: query
        },
    }

    return (
        <li className={listItem} >
            <Link {...linkProps} >
                { icon }
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default SidebarLink
