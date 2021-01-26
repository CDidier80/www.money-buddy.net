import SignInSignUpPage from "./pages/SignInSignUp/SignInSignUpPage.js"
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from "./pages/LandingPage/LandingPage.js"
import { CheckSessionService } from './Services/UserService'
import { gradientWrapper } from "./modules/styles"
import { currencyFormat, currencyChartCallback } from "./modules/clientFunctions"
import Dashboard from "./pages/Dashboard/Dashboard.js"
import { SnackbarProvider } from 'notistack';
import React, { useState } from 'react'


const App = (props) => {
  const [userInfo, setUserInfo]= useState({})
  const [session, setSession] = useState(null)
  const [pageIsLoaded, setLoaded] = useState(true)
  const [authenticated, setAuth] = useState(false)


    const verifyTokenValid = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
            const session = await CheckSessionService()
            setSession(session)
            setAuth(true)
            (() => props.history.push('/main'))()
            } catch (error) {
              setSession(null)
              setAuth(false)
              localStorage.clear()
            }
      }
  }



  const propsForRoutes = {
    setAuth,
    userInfo,
    setUserInfo,
    authenticated, 
    currencyFormat,
    gradientWrapper,
    currencyChartCallback
  }

  // console.log("App.js RENDERED. CURRENT AUTH: ", authenticated)
  return (
    <SnackbarProvider 
      maxSnack={3} 
      style={{fontWeight: "bold"}
    }>
        <main className="app">
          {!pageIsLoaded ? <div><h3>Loading...</h3></div> : 
            <Switch> 
                <Route 
                    exact path="/"      
                    component={ (props) => (
                        <LandingPage 
                            {...props} 
                            fromApp={{...propsForRoutes}}
                        />
                    )}
                />
                <Route 
                    path="/login"        
                    component={ (props) => ( 
                        <SignInSignUpPage         
                            {...props}  
                            fromApp={{...propsForRoutes}}
                            
                        />
                    )}
                />
                <Route 
                    path="/dashboard"        
                    component={ (props) => ( 
                        <Dashboard         
                            {...props}  
                            fromApp={{...propsForRoutes}}
                        />
                    )}
                />  
            </Switch>
          }
        </main>
    </SnackbarProvider>
  )
}

export default withRouter(App)

