import SidebarLink from './components/SidebarLink'
import { useMediaQuery } from '@material-ui/core'
import React, { useLayoutEffect, useState } from 'react'
import { navItems } from "./modules/navItems"
import "./styles/sidebar.css"

const SideBar = props => {
    
    /* ---------------------- PROPS----------------------- */

    const { 
        ticker, 
        setTicker, 
        coloredLinks,
        sidebarClasses, 
        userPreference, 
        setSubpageClasses,
        setSidebarClasses, 
    } = props

    const [selectedLinkIndex, setSelectedLinkIndex] = useState(1)

    /* ---------------------- init MEDIA QUERY ----------------------- */

    const smallScreen = useMediaQuery('(max-width: 600px)', {noSsr: true})

    useLayoutEffect(() => {
        const classes = generateClasses()
        reassignSubpageClass(classes)
        setSidebarClasses(classes)
        setTicker(ticker + 1)
    }, [smallScreen, userPreference])

    const cssPairedClasses = {
        "sidebar"        : "subpage sidebar-open", 
        "sidebar closed" : "subpage sidebar-closed",
        "sidebar mobile" : "subpage mobile"
    }

    /* ---------------------- FUNCTIONS ----------------------- */

    const reassignSubpageClass = (classes) => setSubpageClasses(cssPairedClasses[classes])

    const autoSize = () => smallScreen ? `sidebar closed` : `sidebar`

    const sizeWithPreference = () => {
            if(userPreference === "closed") return "sidebar closed"
            if(!smallScreen) return "sidebar"
            if(smallScreen && userPreference === "open") {
                const screenShrinking = sidebarClasses === "sidebar" 
                return screenShrinking ? "sidebar closed" : "sidebar mobile"
            } 
    }


    const generateClasses = () => {
        const noPreferenceYet = userPreference === ""
        const classesToReturn = noPreferenceYet ? autoSize() : sizeWithPreference()
        return classesToReturn
    }


    return (
        <aside className={sidebarClasses} >
            <ul className="list" >
                {navItems.map((navItem, index) => {
                    const linkIsSelected = (selectedLinkIndex === index) && coloredLinks
                    const linkProps = {
                        lastClicked: linkIsSelected,
                        key: `${index}-SideBarLink`,
                        setSelectedLinkIndex,
                        ...props, 
                        navItem,
                        index,
                    }
                    return  <SidebarLink {...linkProps} />
                })}
            </ul>
        </aside>
    )
}

export default SideBar

