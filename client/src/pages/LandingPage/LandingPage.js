import React from "react";
import LandingNavBar from "./components/LandingNavBar"
import MobileNavBar from "./components/MobileNavBar"
import { CheckSessionService } from "../../Services/UserService";
import "./styles/landingPage.css"
import "./styles/hero.css"
import "./styles/shapes.css"
import "./styles/navbar.css"


const LandingPage = (props) => {

    const floatyContainer = {
        position: "absolute", 
        width: "100vw",
        height: "50vh",
        bottom: "0", 
        left: "0",
        overflow: "hidden",
        backgroundColor: "black"
    }

    const floatyStyles={
        fontSize: "25px", 
        fontFamily: "sans-serif", 
        fontWeight: "bold", 
        animation: "move 30s infinite alternate ease-in-out",
        textShadow:` 
        0 1px 0 #cccccc, 
        0 2px 0 #cccccc, 
        0 3px 0 #cccccc;`
    }

    const possibleColors = [
        "#22c1c3", 
        "#fdbb2d", 
        "#c746ce",
        "#48ce46",
        // "#428bff"
    ]

    const goFloats = [null, null, null, null]

    return (
        <div className="landingPage">
            <LandingNavBar 
                {...props}
            />
            <main className="main">
                <div className="shapes-container">
                    <div className="left-ring"></div>
                    <div className="right-ring"></div>
                    <div className="circle"></div>
                    <div className="top-blob"></div> 
                    <div className="giant-dollar-wrapper">
                        <h1 className="giant-dollar">$</h1>
                    </div>
                    <div styles={floatyContainer}>
                        {/* {goFloats.map((elem, index, arr) => {
                            const color = possibleColors[Math.floor(Math.random() * 4)]
                            const styles={
                                ...floatyStyles,
                                color: color,
                            }
                            return <p key={3000 + index} style={styles}>$</p>
                        })} */}
                    </div>
                    
                </div>
                <div className="hero-wrapper">
                    {/* <div className="row"> */}
                        <div className="text-container">
                            <h1 className="title">
                                Money Buddy
                                <span className="sub-title"> for personal finance </span>
                            </h1>
                            <p className="paragraph">
                                A collection of powerful micro-tools that put you in command of your money.
                            </p>
                        </div>
                    {/* </div> */}
                </div>
                <MobileNavBar 
                    {...props}
                />
            </main>
        </div>
    )
}

export default LandingPage;




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