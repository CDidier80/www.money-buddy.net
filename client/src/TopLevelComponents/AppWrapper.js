import React from 'react'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/core/'
import { moneyBuddyTheme } from '../modules/themeAndStyles'

const AppWrapper = ({children}) => {

    return (
        <SnackbarProvider 
            maxSnack={3} 
            style={{fontWeight: "bold"}
        }>
            <ThemeProvider theme={moneyBuddyTheme}>
                <main className="app">
                    {children}
                </main>
            </ ThemeProvider>
        </SnackbarProvider>
    )
}

export default AppWrapper
