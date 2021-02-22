import LandingNavBar from "./components/Navbar/LandingNavBar"
import MobileNavBar from "./components/Navbar/MobileNavBar"
import ShapesContainer from "./components/ShapesContainer"
import Canvas from "./components/ParticleCanvas/Canvas"
import { makeStyles, withTheme } from '@material-ui/core/styles'
import Hero from "./components/Hero"
import "./styles/landingPage.css"
import "./styles/shapes.css"
import "./styles/navbar.css"
import "./styles/hero.css"
import React, { useState } from "react"


const LandingPage = (props) => {

    console.log(props)

    const [tick, setTick] = useState(0)

    const { primary, secondary } = props.theme.palette

    const handleClick = (e) => {
        console.log("clicked")
        setTick(tick + 1)
    }

    const useStyles = makeStyles({
        landingPage: {
            width: `100%`,
            height: `100vh`,
            'overflow-x': "hidden",
            fontWeight: 400,
            lineHeight: 1.5,
            backgroundImage: `linear-gradient(45deg, ${primary.main} 20%, ${secondary.main})`,
            textRendering: `optimizeLegibility!important`,
            '-webkit-font-smoothing': `antialiased!important`,
        },
    })

    const classes = useStyles()


    return (
        <div className={classes.landingPage}>
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
                {/* <button style={{position: "absolute", zIndex: 44444444}} onClick={(e) => handleClick(e)}>rerender</button>
                <Canvas tick={tick}/> */}
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