import ClearLocalsButton from "../../TopLevelComponents/ClearLocalsButton"
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


const LandingPage = (props) => {

    const classes = useLandingPageStyles(props.theme)

    return (
        <div className={classes.landingPage}>
            <ClearLocalsButton />
            <LandingNavBar 
                {...props}
            />
            <main className="main">
                <ShapesContainer />
                <Hero />
                <MobileNavBar 
                    {...props}
                />
            </main>
        </div>
    )
}

export default withTheme(LandingPage)

















// const LandingPage = (props) => {

//     // console.log("landing page props: ", props)

//     return (
//         <div className="landingPage">
//             <nav className="navbar">
//                 <div className="container">
//                     {/* <a class="mr-lg-5 navbar-brand" href="/themes/laapp-react/">
//                         <img src="/themes/laapp-react/static/media/logo.ad20194d.png" alt="Laapp" class="logo logo-sticky d-block d-md-none"/>
//                     </a> */}
//                     <div className="linkbar">
//                         <ul className="unordered-links">
//                             {props.authenticated ? <AuthenticatedLinks {...props} /> : <NotAuthenticatedLinks />}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             <main className="main">
//                 <div className="shapes-container">
//                     {/* <div className="animation-shape shape-ring animation--rotating-diagonal"></div>
//                     <div className="animation-shape shape-circle animation--clockwise"></div>
//                     <div className="animation-shape shape-triangle animation--anti-clockwise">
//                         <div className="animation--rotating"></div>
//                     </div>
//                     <div className="animation-shape shape-diamond animation--anti-clockwise">
//                         <div className="animation--rotating"></div>
//                     </div> */}
//                     <div className="left-ring"></div>
//                     <div className="right-ring"></div>
//                     <div className="circle"></div>
//                     {/* <div className="static-shape pattern-dots-1"></div>
//                     <div className="static-shape pattern-dots-2"></div>*/}
//                     <div className="weirdThingy"></div> 
//                 </div>
//                 <div className="heroWrapper">
//                     <div className="row">
//                         <div className="column">
//                             <h1 className="a-new-way">
//                                 Money Buddy
//                                 <span className="span"> for personal finance </span>
//                             </h1>
//                             <p className="paragraph">
//                                 A collection of powerful micro-tools that put you in command of your money like never before.
//                             </p>
//                             {/* <nav className="mt-5 nav">
//                                 <a href="#!" className="mr-3 btn btn btn-rounded btn-contrast nav-NavLinknk" >
//                                     Plans &amp; pricing
//                                 </a>
//                                 <a href="#!" className="" >
//                                     Start now
//                                 </a>
//                             </nav> */}
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };