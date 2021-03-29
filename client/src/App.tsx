import { 
    currencyFormat, 
    currencyChartCallback 
} from "./modules/clientFunctions"
import  React, { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction }   from  "react"
import { RouteComponentProps }   from  "react-router"
import  { gradientWrapper }      from  "./modules/styles"
import  { withRouter }           from  "react-router-dom"
import  { CheckSessionService }  from  "./Services/UserService"
import  { Helpers }              from  "./modules/clientFunctions"
import  Routes                   from  "./TopLevelComponents/Routes"
import  AppWrapper               from  "./TopLevelComponents/AppWrapper"


type AppProps = RouteComponentProps

type RouteProps = {
    helpers: any,
    userInfo: object,
    denyAccess: () => void,
    authenticated: boolean, 
    gradientWrapper: object,
    currencyFormat: () => string,
    currencyChartCallback: object,
    setAuth: Dispatch<SetStateAction<boolean>>,
    setUserInfo: Dispatch<SetStateAction<object>>,
    verifyTokenValid: () => Promise<boolean | void>,
}


const App: FC<AppProps> = (props): ReactElement => {

    /* ------------------- STATE ----------------------*/

    const [pageIsLoaded, setLoaded] = useState<boolean>(true)
    const [authenticated, setAuth] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<object>({})

    /*------------ JSON WEB TOKEN FUNCTIONS ------------*/

        const denyAccess: () => void = () => {
            setAuth(false)
            localStorage.clear()
            props.history.push("/login")
        }

        /* validate existing tokens */
        const verifyTokenValid: () => Promise<boolean | void> = async () => {
            try {
                const response = await CheckSessionService()
                if (response){
                    return (response.status === 200) ? true : false
                }
                } catch (error) {denyAccess()}
        }

        const restoreSession: () => void = async () => {
            const tokenExists = localStorage.getItem("token")
            const tokenIsValid = tokenExists && await verifyTokenValid()
            const validUserLacksAuthorization = tokenIsValid && !authenticated
            if (validUserLacksAuthorization) setAuth(true)
        }  
    
        useEffect(() => restoreSession())


    /* --------------- PROPS FOR CHILDREN ---------------*/

    const propsForRoutes: RouteProps = {
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

