import { 
    currencyFormat, 
    currencyChartCallback 
} from "./modules/clientFunctions"
import  React, { useState, useEffect }   from  "react"
import  { gradientWrapper }      from  "./modules/styles"
import  { withRouter }           from  "react-router-dom"
import  { CheckSessionService }  from  "./Services/UserService.ts"
import  { Helpers }              from  "./modules/clientFunctions"
import  Routes                   from  "./TopLevelComponents/Routes"
import  AppWrapper               from  "./TopLevelComponents/AppWrapper"

const App = (props) => {

    /* ------------------- STATE ----------------------*/

    const [pageIsLoaded, setLoaded] = useState(true)
    const [authenticated, setAuth] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    /*------------ JSON WEB TOKEN FUNCTIONS ------------*/

        const denyAccess = () => {
            setAuth(false)
            localStorage.clear()
            props.history.push("/login")
        }

        /* validate existing tokens */
        const verifyTokenValid = async () => {
            try {
                const { status } = await CheckSessionService()
                return (status === 200) ? true : false
                } catch (error) {denyAccess()}
        }

        const restoreSession = async () => {
            const tokenExists = localStorage.getItem("token")
            const tokenIsValid = tokenExists && await verifyTokenValid()
            const validUserLacksAuthorization = tokenIsValid && !authenticated
            if (validUserLacksAuthorization) setAuth(true)
        }  
    
        useEffect(() => restoreSession())


    /* --------------- PROPS FOR CHILDREN ---------------*/

    const propsForRoutes = {
        setAuth,
        userInfo,
        denyAccess,
        setUserInfo,
        authenticated, 
        currencyFormat,
        gradientWrapper,
        verifyTokenValid,
        helpers: Helpers,
        currencyChartCallback,
    }

    /* ---------------------- JSX ----------------------*/

    return (
            <AppWrapper>
                {!pageIsLoaded ? 
                    <div></div> : 
                    <Routes {...props} fromApp={{...propsForRoutes}} /> 
                }
            </AppWrapper>
    )
}

export default withRouter(App)

