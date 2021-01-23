import React, {
    useEffect, 
    useLayoutEffect,
    useState
} from 'react';
import "./styles/sidebar.css"
import SidebarLink from './components/SidebarLink';
import {navItems} from "./modules/navItems"
import { useMediaQuery } from '@material-ui/core'

const SideBar = (props) => {
    
    /* ---------------------- PROPS----------------------- */

    const { userPreference } = props.fromDashboard

    /* ---------------------- init MEDIA QUERY ----------------------- */

    const smallScreen = useMediaQuery('(max-width: 600px)', {noSsr: true})

    const [cssClasses, setCssClasses] = useState(smallScreen ? "sidebar closed" : "sidebar")

    useLayoutEffect(() => {
        const classes = generateClasses()
        setCssClasses(classes)
    }, [smallScreen, userPreference])

    /* ---------------------- FUNCTIONS ----------------------- */

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
                const screenShrinking = cssClasses === "sidebar" 
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
            className={cssClasses} 
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

