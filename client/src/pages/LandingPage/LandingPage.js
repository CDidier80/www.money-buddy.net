import LandingNavBar from "./components/Navbar/LandingNavBar"
import MobileNavBar from "./components/Navbar/MobileNavBar"
import ShapesContainer from "./components/ShapesContainer"
import { useLandingPageStyles } from "./styles/styleHooks"
import { withTheme } from '@material-ui/core/styles'
import Hero from "./components/Hero"
import "./styles/landingPage.css"
import "./styles/shapes.css"
import "./styles/navbar.css"
import "./styles/hero.css"
import React from "react"


const LandingPage = props => {

    const classes = useLandingPageStyles(props.theme)

    return (
        <div className={classes.landingPage}>
            <LandingNavBar { ...props } />
            <main className="main">
                <ShapesContainer />
                <Hero />
                <MobileNavBar { ...props } />
            </main>
        </div>
    )
}

export default withTheme(LandingPage)
