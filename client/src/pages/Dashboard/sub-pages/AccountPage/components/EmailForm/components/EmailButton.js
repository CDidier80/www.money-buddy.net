import { emailValidityCheck } from "../../../../../../../modules/emailValidition/emailValidationFunctions"
import ThemedButton from "../../../../../../../TopLevelComponents/ThemedButton"
import { UpdateEmail } from "../../../../../../../api_services/user-api-service.ts"
import useSnackbars from "../../../../../../../customHooks/useSnackbars"
import React from 'react'

const EmailButton = (props) => {

    const overrides = {width: "20%", marginTop: "20px" }
    const {id: user_id, newEmail} = props

    const {
        errorSnackbar,
        updateSnackbar,
        invalidSnackbar,
        disabledForGuestSnackbar,
    } = useSnackbars()

    const submitNewEmail = async (e) => {
        e.preventDefault()
        if (newEmail === "") {
            errorSnackbar("Email Address")
            return
        }
        try {
            if (!emailValidityCheck(newEmail)){
                invalidSnackbar('Email Address')
                return false
            }

            if (user_id === 20) {
                disabledForGuestSnackbar()
                return
            }
            const {status} = await UpdateEmail({userId: user_id, email: newEmail})
            if (status === 200) updateSnackbar('Email Address')
        } catch (error) { errorSnackbar('Email Address') }
    }

    return (
        <ThemedButton
            onClick={(e)=>submitNewEmail(e)}
            overrides={overrides}
            theme={props.theme} 
        >
            Submit
        </ThemedButton>
    )
}

export default EmailButton

