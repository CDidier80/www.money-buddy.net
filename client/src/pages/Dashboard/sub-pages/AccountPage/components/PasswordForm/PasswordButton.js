import ThemedButton from "../../../../../../TopLevelComponents/ThemedButton"
import useSnackbars from "../../../../../../customHooks/useSnackbars"
import { UpdatePassword } from "../../../../../../Services/UserService"
import React from 'react'

const PasswordButton = (props) => {

    const {id: user_id} = props

    const {
        newPassword,
        reenteredNewPassword
    } = props.fromPasswordForm

    const { 
        mismatch,
        errorSnackbar,
        updateSnackbar,
        disabledForGuestSnackbar,         
    } = useSnackbars()


    const submitNewPassword = async (e) => {
        e.preventDefault()
        if (newPassword === "" | reenteredNewPassword === "")  {
            errorSnackbar("Password")
            return
        } else if (newPassword !== reenteredNewPassword){
            mismatch('New Password', 'Reentered Password')
            return
        } else if (user_id === 20) {
            disabledForGuestSnackbar()
            return
        } else {
            try {
                const response = await UpdatePassword({userId: user_id, password: newPassword})
                if (response.status === 200) {
                    updateSnackbar('Password')
                }
            } catch (error) {
                errorSnackbar('Password')
                throw error
            }
        }
    }

    const overrides = { width: "20%", marginTop: "20px"}

    return (
        <ThemedButton
            theme={props.theme}
            overrides={overrides}
            onClick={(e)=>submitNewPassword(e)}
        >
            Submit
        </ThemedButton>
    )
}

export default PasswordButton
