import React from 'react'
import DumbNavbar from "./DumbNavbar"
import DumbSidebar from "./DumbSidebar"
// import "./styles/dashboard.css"
// import "./styles/navbar.css"



const LoadingScreen = () => {

    const smallScreen = window.innerWidth <= 600

    const widthWhenSidebarClosed = "calc(100vw - 49px - 40px)"
    const widthWhenSidebarOpened = "calc(100vw - 155px - 40px)"

    const dummySubpageStyle = {
        backgroundColor: "white",
        width: smallScreen ? widthWhenSidebarClosed : widthWhenSidebarClosed
    }

    return (
        <div className="dashboard dumb">
            <DumbNavbar />
        <main className="dash-main-flex dumb">
            <DumbSidebar /> 
            <div 
                className="subpage"
                style={dummySubpageStyle}
            > </div>
        </main>
    </div>
    )
}

export default LoadingScreen
