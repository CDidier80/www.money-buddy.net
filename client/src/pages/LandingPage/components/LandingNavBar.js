import React from "react";
import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"

const LandingNavBar = (props) => {

    return (
            <nav className="navbar">
                <div className="container">
                    <div className="linkbar">
                        <ul className="unordered-links">
                            {props.authenticated ? 
                                <AuthenticatedLinks {...props} /> 
                                : 
                                <UnauthenticatedLinks />}
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default LandingNavBar