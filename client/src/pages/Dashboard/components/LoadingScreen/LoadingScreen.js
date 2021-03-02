import DumbSidebar from "./DumbSidebar"
import DumbNavbar from "./DumbNavbar"
import React from 'react'




const LoadingScreen = (props) => {

    const smallScreen = window.innerWidth <= 600

    const widthWhenSidebarClosed = "calc(100vw - 49px - 40px)"
    const widthWhenSidebarOpened = "calc(100vw - 155px - 40px)"

    const dummySubpageStyle = {
        backgroundColor: "white",
        width: smallScreen ? widthWhenSidebarClosed : widthWhenSidebarClosed
    }

    const classes = useDashboardStyles(props.theme)

    return (
        <div className={classes.dashboard}>
            <DumbNavbar />
            <main className="dash-main-flex dumb">
                <DumbSidebar /> 
                <div className="subpage" style={dummySubpageStyle} > </div>
            </main>
        </div>
    )
}

export default LoadingScreen
