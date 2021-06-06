import GradientWrapper from '../../../../TopLevelComponents/GradientWrapper'
import PasswordForm from './components/PasswordForm/PasswordForm'
import DeletePopup from './components/DeleteAccount/DeletePopup'
import useSnackbars from '../../../../custom_hooks/useSnackbars'
import DeleteText from './components/DeleteAccount/DeleteText'
import { withTheme } from '@material-ui/core/'
import EmailForm from './components/EmailForm/EmailForm'
import { withSnackbar  } from 'notistack'
import useStyles from './styles/useStyles'
import React, { useState } from 'react'
import './styles/accountPage.css'

const AccountPage = props => {
    
    const { id: user_id } = props
        
    const [deleteTriggered, setDeleteTriggered] = useState(false)
    
    const {
        updateSnackbar,
        errorSnackbar,
        mismatch,
    } = useSnackbars()

    const gradientOverrides = {
        padding: '7px',
        maxWidth: '600px',
        minWidth: '415',
        margin: '30px auto'
    }

    const classes = useStyles(props.theme)

    const updateField = (e, stateFunction) => {   
        e.preventDefault()
        const { value } = e.target
        stateFunction(value)
    }

    const formFont = {
        fontFamily: 'Lato,sans-serif',
        textRendering: 'optimizeLegibility!important',
        WebkitFontSmoothing: 'antialiased!important'
    }

    const snackbars = {
        mismatch,
        errorSnackbar,
        updateSnackbar
    }
    
    const formProps = {
        formFont,
        updateField,
        ...snackbars
    }

    return (
            <GradientWrapper 
                theme={props.theme}
                overrides={gradientOverrides}
            >
                    <div 
                        className='account-page' 
                        className={ classes.paper }
                    >
                        <PasswordForm 
                            { ...props }
                            fromAccountPage={{ ...formProps }}
                        />
                        <EmailForm 
                            { ...props }
                            fromAccountPage={{ ...formProps }}
                        />
                        <DeleteText
                            formFont={ formFont }
                            setDeleteTriggered={ setDeleteTriggered }
                        />
                        {deleteTriggered && (
                            <DeletePopup 
                                { ...props }
                                userId={ user_id }
                                setDeleteTriggered={ setDeleteTriggered } 
                            />
                        )}
                    </div>

            </GradientWrapper>
    )
}

export default withSnackbar(withTheme(AccountPage))




// for mobile friendly experience, budget categories should be collabsible panels with default setting as closed

// imagine panel on the left containing 'links' in dropdown to open various 'pages' in the main page
// all pages would render on the main dashboard page