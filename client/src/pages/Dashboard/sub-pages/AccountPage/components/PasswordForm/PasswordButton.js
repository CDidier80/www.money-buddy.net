import { UpdatePassword } from "../../../../../../Services/UserService"
import React from 'react'

const PasswordButton = (props) => {

    const {id: user_id} = props

    const {
        mismatch,
        errorSnackbar,
        updateSnackbar
    } = props.fromAccountPage

    const {
        newPassword,
        reenteredNewPassword
    } = props.fromPasswordForm


    const submitNewPassword = async (e) => {
        e.preventDefault()
        if (newPassword === "" | reenteredNewPassword === "")  {
            errorSnackbar("Password")
            return
        } else if (newPassword !== reenteredNewPassword){
            mismatch('New Password', 'Reentered Password')
            return
        } else {
            try {
                const response = await UpdatePassword({userId: user_id, password: newPassword})
                if (response.status === 200) {
                    updateSnackbar('Password')
                }
            } catch (error) {
                console.log(error)
                errorSnackbar('Password')
            }
        }
    }

    return (
        <button 
            className="submitButton account-page"
            onClick={(e)=>submitNewPassword(e)}
        >
            Submit
        </button>
    )
}

export default PasswordButton
