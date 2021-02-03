import SidebarLink from './components/SidebarLink';
import { useMediaQuery } from '@material-ui/core'
import { navItems } from "./modules/navItems"
import "./styles/sidebar.css"
import React, {
    useLayoutEffect,
    useState
} from 'react'


const SideBar = (props) => {
    
    /* ---------------------- PROPS----------------------- */

    const { 
        setSidebarClasses, 
        setSubpageClasses,
        userPreference, 
        sidebarClasses, 
        setTicker, 
        ticker, 
    } = props.fromDashboard

    /* ---------------------- init MEDIA QUERY ----------------------- */

    const smallScreen = useMediaQuery('(max-width: 600px)', {noSsr: true})


    useLayoutEffect(() => {
        const classes = generateClasses()
        reassignSubpageClass(classes)
        setSidebarClasses(classes)
        setTicker(ticker + 1)
    }, [smallScreen, userPreference])

    /* ---------------------- FUNCTIONS ----------------------- */


    const reassignSubpageClass = (classes) => {
        switch (classes) {
            case "sidebar":
                setSubpageClasses("subpage sidebar-open")
                return
            case "sidebar closed":
                setSubpageClasses("subpage sidebar-closed")
                return
            case "sidebar mobile":
                setSubpageClasses("subpage mobile")
                return
            default: 
                console.log("no matching cases")
        }
    }

    const autoSize = () => {
        const cssClass = smallScreen ? `sidebar closed` : `sidebar`
        return cssClass
    }


    const sizeWithPreference = () => {
        switch (true) {
            case userPreference === "closed":
                return "sidebar closed"
            case !smallScreen: 
                return "sidebar"
            case smallScreen && userPreference === "open":
                const screenShrinking = sidebarClasses === "sidebar" 
                const classToReturn = screenShrinking ? "sidebar closed" : "sidebar mobile"
                return classToReturn
            default:
                console.log("switch statement found no true cases")
        }
    }


    const generateClasses = () => {
        const noPreferenceYet = userPreference === ""
        const classesToReturn = noPreferenceYet ? autoSize() : sizeWithPreference()
        return classesToReturn
    }


    return (
        <aside 
            className={sidebarClasses} 
        >
            <ul className="list" >
                {navItems.map((navItem, index) => 
                    <SidebarLink 
                        key={`${index}-SideBarLink`} 
                        navItem={navItem} 
                        {...props}
                    />
                )}
            </ul>
        </aside>
    )
}

export default SideBar

