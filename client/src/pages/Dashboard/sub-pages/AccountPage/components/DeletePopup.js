import React, { useState } from 'react';
import { DeleteUser} from "../../../../../Services/UserService"

const DeletePopup = ({setDeleteTriggered}) => {

    return (
        <div className="customBackdrop" onClick={(e) => setDeleteTriggered(false)} >
            <div className="popup">
                <p className="warning">Warning: This action is irreversible.</p>
                <div className="button-container">
                    <button 
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
