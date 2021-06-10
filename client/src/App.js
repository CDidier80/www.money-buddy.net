import {
    currencyFormat,
    currencyChartCallback
} from "./modules/clientFunctions"
import  React, { useState, useEffect }   from  "react"
import  { gradientWrapper }      from  "./modules/styles"
import  { withRouter }           from  "react-router-dom"
import  { CheckSessionService }  from  "./services/api_services/user-api-service.ts"
import  { Helpers }              from  "./modules/clientFunctions"
import  PageRouter from  "./TopLevelComponents/PageRouter"
import { SnackbarProvider } from 'notistack'
import { ThemeProvider, withTheme } from '@material-ui/core/'
import { moneyBuddyTheme } from './modules/themeAndStyles'

const App = props => {

    // const checkSessionValid = async () => {
    //     const auth = new AuthService()
    //     const isValid = await auth.verifyTokenValid()

    //     } catch (error) {
    //         setAuthenticated(false)
    //         props.history.push("/login")
    //     }
    // }

    // const restoreSession = async () => {
    //     const tokenExists = localStorage.getItem("token")
    //     const tokenIsValid = tokenExists && await verifyTokenValid()
    //     const validUserLacksAuthorization = tokenIsValid && !authenticated
    //     if (validUserLacksAuthorization) setAuthenticated(true)
    // }


    return (
        <SnackbarProvider maxSnack={3} style={{fontWeight: "bold"} }>
            <ThemeProvider theme={moneyBuddyTheme}>
                <main className="app">
                    <PageRouter
                        {...{
                            ...props,
                            currencyFormat,
                            gradientWrapper,
                            helpers: Helpers,
                            currencyChartCallback
                        }}
                    />
                </main>
            </ThemeProvider>
        </SnackbarProvider>
    )
}

export default withRouter(withTheme(App))

