import React from 'react'
import DumbNavbar from "./DumbNavbar"
import DumbSidebar from "./DumbSidebar"
// import "./styles/dashboard.css"
// import "./styles/navbar.css"

const LoadingScreen = () => {
    return (
        <div className="dashboard dumb">
            <DumbNavbar />
        <main className="dash-main-flex dumb">
            <DumbSidebar /> 
            <div className="sub-page"> </div>
        </main>
    </div>
    )
}

export default LoadingScreen
