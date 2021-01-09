import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard.js"
import LandingPage from "./pages/LandingPage/LandingPage.js"
import SignInSignUpPage from "./pages/SignInSignUp/SignInSignUpPage.js"
import { CheckSessionService } from './Services/UserService'
import { SnackbarProvider } from 'notistack';


const App = (props) => {
    const [pageIsLoaded, setLoaded] = useState(true)
    const [session, setSession] = useState(null)
    const [authenticated, setAuth] = useState(false)
    const [userInfo, setUserInfo]= useState({})


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

    // console.log("App.js RENDERED. CURRENT AUTH: ", authenticated)
    return (
      <SnackbarProvider 
        maxSnack={3} 
        style={{fontWeight: "bold"}
      }>
          <main className="app">
            {!pageIsLoaded ? <div><h3>Loading...</h3></div> : 
              <Switch> 
                  <Route exact path="/"      
                      component={ (props) => (
                          <LandingPage 
                              {...props} 
                              authenticated={authenticated} 
                              userInfo={userInfo} 
                              setAuth={setAuth} 
                              setUserInfo={setUserInfo}
                          />
                      )}
                  />
                  <Route path="/login"        
                      component={ (props) => ( 
                          <SignInSignUpPage         
                              {...props}  
                              setAuth={setAuth}
                              authenticated={authenticated} 
                              userInfo={userInfo} 
                              setUserInfo={setUserInfo}
                              
                          />
                      )}
                  />
                  <Route path="/dashboard"        
                      component={ (props) => ( 
                          <Dashboard         
                              {...props}  
                              authenticated={authenticated} 
                              userInfo={userInfo} 
                              setUserInfo={setUserInfo}
                              setAuth={setAuth}
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

