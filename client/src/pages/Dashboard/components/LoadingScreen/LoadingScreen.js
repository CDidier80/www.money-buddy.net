import SpinningDollar from "../../../../TopLevelComponents/SpinningDollar/SpinningDollar"
import { useDashboardStyles } from "../../../Dashboard/sub-pages/styles/styles"
import DumbSidebar from "./DumbSidebar"
import DumbNavbar from "./DumbNavbar"
import React from 'react'

const LoadingScreen = (props) => {

    const smallScreen = window.innerWidth <= 600

    const widthWhenSidebarClosed = "calc(100vw - 49px - 40px)"
    const widthWhenSidebarOpened = "calc(100vw - 155px - 40px)"

    const dummySubpageStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        backgroundColor: "white",
        width: smallScreen ? widthWhenSidebarClosed : widthWhenSidebarClosed,
    }

    const classes = useDashboardStyles(props.theme)

    return (
        <div className={classes.dashboard}>
            <DumbNavbar />
            <main className="dash-main-flex dumb">
                <DumbSidebar /> 
                <div style={dummySubpageStyle} > 
                    <SpinningDollar />
                </div>
            </main>
        </div>
    )
}

export default LoadingScreen
