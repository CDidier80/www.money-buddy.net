import PasswordForm from "./components/PasswordForm/PasswordForm"
import { MuiThemeProvider, makeStyles } from '@material-ui/core/'
import DeletePopup from './components/DeleteAccount/DeletePopup'
import DeleteText from './components/DeleteAccount/DeleteText'
import EmailForm from "./components/EmailForm/EmailForm"
import { withSnackbar, useSnackbar  } from 'notistack'
import {theme} from "./styles/MoneyBuddyTheme"
import useStyles from "./styles/useStyles"
import React, { useState } from 'react'
import "./styles/accountPage.css"

const AccountPage = (props) => {

    console.log(props)

    /* ------------------------ PROPS ------------------------ */
    
    const { id: user_id } = props
    const { gradientWrapper } = props.fromDashboard
    
    /* ------------------------ STATE ------------------------ */
    
    const [deleteTriggered, setDeleteTriggered] = useState(false)
    
    /* ------------------------ SNACKBARS ------------------------ */

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const errorVariant = {variant: 'Error'}
    const successVariant = { variant: 'Success', iconVariant: "Success" }


    const errorSnackbar = (variable) => {
        enqueueSnackbar(`Failed to Change ${variable}`, errorVariant)
    }
    
    const mismatch = (variableOne, variableTwo) => {
        enqueueSnackbar(`${variableOne} doesn't match ${variableTwo}`, errorVariant)
    }
    
    const updateSnackbar = (variable) => enqueueSnackbar(
        `Successfully Updated ${variable}`, successVariant
        ) 
    
    /* ------------------------ STYLES ------------------------ */

    const classes = useStyles()

    const useGradientClass = makeStyles({
        gradientWrapper: {
            ...gradientWrapper,
            padding: "7px",
            maxWidth: "600px",
            margin: "30px auto"
        }
    })

    const gradientClass = useGradientClass()


    /* ------------------------ FUNCTIONS ------------------------ */

    const updateField = (e, stateFunction) => {   
        e.preventDefault()
        const { value } = e.target
        stateFunction(value)
    }
    

    /* -------------------- PROPS FOR CHILDREN -------------------- */


    const formFont = {
        fontFamily: "Lato,sans-serif",
        textRendering: "optimizeLegibility!important",
        WebkitFontSmoothing: "antialiased!important"
    }

    const snackbars = {
        mismatch,
        errorSnackbar,
        updateSnackbar,
    }
    
    const fromProps = {
        formFont,
        updateField,
        ...snackbars,
    }



    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <div className={gradientClass.gradientWrapper}>
                    <div 
                        className="account-page" 
                        className={classes.paper}
                    >
                        <PasswordForm 
                            {...props}
                            fromAccountPage={{...fromProps}}
                        />
                        <EmailForm 
                            {...props}
                            fromAccountPage={{...fromProps}}
                        />
                        <DeleteText
                            formFont={formFont}
                            setDeleteTriggered={setDeleteTriggered}
                        />
                        {deleteTriggered && (
                            <DeletePopup 
                                {...props}
                                userId={user_id}
                                setDeleteTriggered={setDeleteTriggered} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default withSnackbar(AccountPage)




// for mobile friendly experience, budget categories should be collabsible panels with default setting as closed

// imagine panel on the left containing "links" in dropdown to open various "pages" in the main page
// all pages would render on the main dashboard page