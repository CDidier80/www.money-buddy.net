import React from 'react'

const AppWrapper = (App) => {
    return (
        <SnackbarProvider maxSnack={3} style={{fontWeight: "bold"} }>
            <ThemeProvider theme={moneyBuddyTheme}>
                    {children}
            </ ThemeProvider>
        </SnackbarProvider>
    )
}

export default withTheme(AppWrapper)
