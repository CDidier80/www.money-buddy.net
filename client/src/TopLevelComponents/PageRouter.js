import  SignInSignUpPage  from  "../pages/SignInSignUp/SignInSignUpPage.js"
import  LandingPage       from  "../pages/LandingPage/LandingPage.js"
import  Dashboard         from  "../pages/Dashboard/Dashboard.js"
import { Route, Switch, useLocation }  from  "react-router-dom"
import ProtectedRoute     from  "./ProtectedRoute"
import React, { useEffect, useState }             from  "react"
import AuthService from './services/auth-service'


const PageRouter = props => {

    const [loading, setLoading] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    const location = useLocation()

    const checkSession = async () => {
        const auth = new AuthService()
        const response = await auth.checkSession()
        setUser(response?.user || {})
        setAuthenticated(!!response)
        if (!response) {
            if (location.pathname === './dashboard') {
                setLoading(false)
                props.history.push('/login')
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        let mounted = true
        if (mounted) {
            setLoading(true)
            checkSession()
        }
        return () => ( mounted = false )
    }, [location, loading])


    const props = { authenticated, setAuthenticated, user, setUser, ...props }

    return ( loading ? <div></div> :
        <Switch>
            <Route
                exact path="/"
                component={ () => ( <LandingPage { ...props } /> )}
            />
            <Route
                path="/login"
                component={ () => ( <SignInSignUpPage { ...props } /> )}
            />
            <ProtectedRoute { ...props } path="/dashboard" >
                <Dashboard { ...props } />
            </ProtectedRoute>
        </Switch>
    )
}

export default PageRouter
