import { 
    Route, 
    Switch, 
    withRouter 
} from 'react-router-dom'
import { 
    currencyFormat, 
    currencyChartCallback 
} from "./modules/clientFunctions"
import  React, { useState }        from  'react'
import  { SnackbarProvider }       from  'notistack';
import  { gradientWrapper }        from  "./modules/styles"
import  { CheckSessionService }    from  './Services/UserService'
import  Dashboard                  from  "./pages/Dashboard/Dashboard.js"
import  LandingPage                from  "./pages/LandingPage/LandingPage.js"
import  SignInSignUpPage           from  "./pages/SignInSignUp/SignInSignUpPage.js"



const App = (props) => {

    /* ------------------- STATE ----------------------*/

    const [userInfo, setUserInfo]= useState({})
    const [session, setSession] = useState(null)
    const [pageIsLoaded, setLoaded] = useState(true)
    const [authenticated, setAuth] = useState(false)


  /* -------------------- FUNCTIONS---------------------*/

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await CheckSessionService()
                setSession(session)
                setAuth(true)
                (() => props.history.push('/main'))()
            } catch (error) {
                setAuth(false)
                setSession(null)
                localStorage.clear()
            }
        }
    }

    /* --------------- PROPS FOR CHILDREN ---------------*/

    const propsForRoutes = {
        setAuth,
        userInfo,
        setUserInfo,
        authenticated, 
        currencyFormat,
        gradientWrapper,
        currencyChartCallback
    }

    /* ---------------------- JSX ----------------------*/

    return (
        <SnackbarProvider 
            maxSnack={3} 
            style={{fontWeight: "bold"}
        }>
            <main className="app">
                {!pageIsLoaded ? <div></div> : 
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

