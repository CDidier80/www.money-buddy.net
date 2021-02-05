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

    return (
        <button 
            className="submitButton account-page"
            onClick={(e)=>submitNewEmail(e)}
        >
            Submit
        </button>
    )
}

export default EmailButton

