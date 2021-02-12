import { 
    currencyFormat, 
    currencyChartCallback 
} from "./modules/clientFunctions"
import  React, { useState, useEffect }   from  "react"
import  { gradientWrapper }      from  "./modules/styles"
import  { withRouter }           from  "react-router-dom"
import  { CheckSessionService }  from  "./Services/UserService"
import  Routes                   from  "./TopLevelComponents/Routes"
import  AppWrapper               from  "./TopLevelComponents/AppWrapper"

// background-image: linear-gradient(
//     45deg
//     ,#2227c3,#ff3939);

const App = (props) => {

    /* ------------------- STATE ----------------------*/

    const [pageIsLoaded, setLoaded] = useState(true)
    const [authenticated, setAuth] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    /*------------ JSON WEB TOKEN FUNCTIONS ------------*/

        const revokeClearAndRedirect = () => {
            setAuth(false)
            localStorage.clear()
            props.history.push("/login")
        }

        /* validate existing tokens */
        const verifyTokenValid = async () => {
            try {
                const { status } = await CheckSessionService()
                return (status === 200) ? true : false
                } catch (error) {revokeClearAndRedirect()}
        }
    
        useEffect(() => {
            const restoreSession = async () => {
                if (!authenticated && localStorage.getItem("token")) {
                    const validUserLacksAuthorization = await verifyTokenValid()
                    if (validUserLacksAuthorization) setAuth(true)
                } 
            }        
            restoreSession()
        })


    /* --------------- PROPS FOR CHILDREN ---------------*/

    const propsForRoutes = {
        setAuth,
        userInfo,
        setUserInfo,
        authenticated, 
        currencyFormat,
        gradientWrapper,
        verifyTokenValid,
        currencyChartCallback,
        revokeClearAndRedirect,
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

