import DeleteAccountButton from "./DeleteAccountButton"
import ReturnButton from "./ReturnButton"
import React from 'react'

const DeletePopup = (props) => {

    return (
        <div 
            className="custom-backdrop" 
            onClick={() => props.setDeleteTriggered(false)} 
        >
            <div className="popup">
                <p className="warning">Warning: This action is irreversible.</p>
                <div className="button-container">
                    <DeleteAccountButton { ...props } />
                    <ReturnButton { ...props } />
                </div>
            </div>
        </div>
    )
}


export default DeletePopup
