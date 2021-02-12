import { SnackbarProvider } from 'notistack'
import React from 'react'

const AppWrapper = ({children}) => {

    return (
        <SnackbarProvider 
            maxSnack={3} 
            style={{fontWeight: "bold"}
        }>
            <main className="app">
                {children}
            </main>
        </SnackbarProvider>
    )
}

export default AppWrapper
