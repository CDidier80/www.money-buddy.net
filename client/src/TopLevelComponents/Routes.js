import  SignInSignUpPage  from  "../pages/SignInSignUp/SignInSignUpPage.js"
import  LandingPage       from  "../pages/LandingPage/LandingPage.js"
import  Dashboard         from  "../pages/Dashboard/Dashboard.js"
import { Route, Switch }  from  "react-router-dom"
import ProtectedRoute     from  "./ProtectedRoute"
import React              from  "react"


const Routes = (props) => {

    return (
        <Switch> 
            <Route 
                exact path="/"      
                component={ () => (
                    <LandingPage 
                        {...props}
                    />
                )}
            />
            <Route 
                path="/login"        
                component={ () => ( 
                    <SignInSignUpPage {...props} />
                )}
            />
            <ProtectedRoute
                {...props}
                path="/dashboard"        
            >
                <Dashboard {...props} />
            </ProtectedRoute> 
        </Switch>
    )
}

export default Routes
