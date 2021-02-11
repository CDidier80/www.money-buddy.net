import { DeleteUser} from "../../../../../../Services/UserService"
import React from 'react';

const DeletePopup = (props) => {

    const {
        userId, 
        history, 
        setDeleteTriggered
    } = props

    const {
        setAuth,
        setSessionValid,
    } = props.fromApp

    const deleteAccount = async (e) => {
        e.preventDefault()
        await DeleteUser({userId})
        localStorage.clear()
        setAuth(false)
        setSessionValid(false)
        history.push("/")
    }

    return (
        <div 
            className="customBackdrop" 
            onClick={() => setDeleteTriggered(false)} 
        >
            <div className="popup">
                <p className="warning">Warning: This action is irreversible.</p>
                <div className="button-container">
                    <button 
                        onClick={(e)=>deleteAccount(e)}
                        className="submitButton delete-account-button"
                    >
                        Delete Account
                    </button>
                    <button 
                        className="submitButton return"
                        onClick={() => setDeleteTriggered(false)}
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}


export default DeletePopup
