import ThemedButton from "../../../../../../../TopLevelComponents/ThemedButton"
import { UpdateEmail } from "../../../../../../../Services/UserService"
import React from 'react'

const EmailButton = (props) => {

    const {id: user_id, newEmail} = props

    const {
        errorSnackbar,
        updateSnackbar,
    } = props.fromAccountPage

    const submitNewEmail = async (e) => {
        e.preventDefault()
        if (newEmail === "") {
            errorSnackbar("Email Address")
            return
        }
        try {
            const response = await UpdateEmail({userId: user_id, email: newEmail})
            console.log("submit new email response: ", response)
            if (response.status === 200) {
                updateSnackbar('Email Address')
            }
        } catch (error) {
            console.log(error)
            errorSnackbar('Email Address')
        }
    }

    const overrides = {width: "20%", marginTop: "20px" }

    return (
        <ThemedButton
            theme={props.theme} 
            overrides={overrides}
            onClick={(e)=>submitNewEmail(e)}
        >
            Submit
        </ThemedButton>
    )
}

export default EmailButton

