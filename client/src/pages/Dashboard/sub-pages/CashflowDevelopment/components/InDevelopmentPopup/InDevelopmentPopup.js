import ViewPageButton from './ViewPageButton'
import DialogWrapper from "./DialogWrapper"
import PopupHeader from "./PopupHeader"
import Message from "./Message"
import React from 'react'


const InDevelopmentPopup = (props) => {

    return (
            <DialogWrapper>
                <PopupHeader />
                <Message     />
                <ViewPageButton 
                    {...props} 
                />
            </DialogWrapper>
    )
}

export default InDevelopmentPopup