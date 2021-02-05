import { SnackbarProvider } from 'notistack'
import React from 'react'

const AppWrapper = (props) => {
    return (
        <SnackbarProvider 
            maxSnack={3} 
            style={{fontWeight: "bold"}
        }>
            <main className="app">
                {props.children}
            </main>
        </SnackbarProvider>
    )
}

export default AppWrapper
