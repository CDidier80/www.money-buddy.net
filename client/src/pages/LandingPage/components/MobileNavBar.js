import React from "react";
import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"

const MobileNavBar = (props) => {

    return (
            <nav className="mobile-navbar">
                <div className="container mobile">
                    <div className="linkbar mobile">
                        <ul className="unordered-links mobile">
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

export default MobileNavBar