import  SignInSignUpPage  from  "../pages/SignInSignUp/SignInSignUpPage.js"
import  LandingPage       from  "../pages/LandingPage/LandingPage.js"
import  Dashboard         from  "../pages/Dashboard/Dashboard.js"
import { Route, Switch }  from  "react-router-dom"
import React              from  "react"


const Routes = (appProps) => {
    return (
        <Switch> 
            <Route 
                exact path="/"      
                component={ (props) => (
                    <LandingPage 
                        {...props}
                        {...appProps} 
                    />
                )}
            />
            <Route 
                path="/login"        
                component={ (props) => ( 
                    <SignInSignUpPage
                        {...props}
                        {...appProps}  
                        
                    />
                )}
            />
            <Route 
                path="/dashboard"        
                component={ (props) => ( 
                    <Dashboard
                        {...props}
                        {...appProps}  
                    />
                )}
            />  
        </Switch>
    )
}

export default Routes
