import ThemedButton from '../../../../../../TopLevelComponents/ThemedButton'
import useSnackbars from "../../../../../../customHooks/useSnackbars"
import { DeleteUser} from "../../../../../../api_services/UserService.ts"
import React from 'react'

const DeleteAccountButton = (props) => {

    const { userId, history, theme, fromApp } = props
    const { setAuth } = fromApp

    const { disabledForGuestSnackbar } = useSnackbars()

    const deleteAccount = async (e) => {
        if (userId === 20) {
            disabledForGuestSnackbar()
            return
        }
        e.preventDefault()
        await DeleteUser({userId})
        localStorage.clear()
        setAuth(false)
        history.push("/")
    }

    const overrides = {
        width: "30%",
        fontSize: "14px"
    }

    return (
        <ThemedButton 
            theme={theme}
            onClick={(e)=>deleteAccount(e)}
            overrides={overrides}
        >
            Delete Account
        </ThemedButton>
    )
}

export default DeleteAccountButton
