import { 
    currencyFormat, 
    currencyChartCallback 
} from "./modules/clientFunctions"
import  React, { useState }      from  "react"
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

    const [userInfo, setUserInfo]= useState({})
    const [pageIsLoaded, setLoaded] = useState(true)
    const [authenticated, setAuth] = useState(false)
    const [validSession, setSessionValid] = useState(false)


    /* -------------------- FUNCTIONS---------------------*/

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const sessionStatus = await CheckSessionService()
                if (sessionStatus === 200) {
                    setSessionValid(true)
                    setAuth(true)
                } else {
                    localStorage.clear()
                    setAuth(false)
                    setSessionValid(true)
                    props.history.push("/login")
                }
            } catch (error) {
                setAuth(false)
                setSessionValid(false)
                localStorage.clear()
            }
        }
    }

    /* --------------- PROPS FOR CHILDREN ---------------*/

    const propsForRoutes = {
        setAuth,
        userInfo,
        setUserInfo,
        validSession,
        authenticated, 
        currencyFormat,
        setSessionValid,
        gradientWrapper,
        verifyTokenValid,
        currencyChartCallback
    }

    /* ---------------------- JSX ----------------------*/

    return (
            <AppWrapper >
                {!pageIsLoaded ? <div></div> : 
                    <Routes {...props } fromApp={{...propsForRoutes}} />
                }
            </AppWrapper>
    )
}

export default withRouter(App)

