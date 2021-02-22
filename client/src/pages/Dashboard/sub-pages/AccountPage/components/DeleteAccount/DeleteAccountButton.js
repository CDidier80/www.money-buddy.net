import ThemedButton from '../../../../../../TopLevelComponents/ThemedButton'
import { DeleteUser} from "../../../../../../Services/UserService"
import React from 'react'

const DeleteAccountButton = (props) => {

    const { userId, history, theme, fromApp } = props
    const { setAuth } = fromApp

    const deleteAccount = async (e) => {
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
