import ThemedButton from "../../../../../../TopLevelComponents/ThemedButton"
import { DialogActions, makeStyles } from '@material-ui/core'
import { useButtonWrapperFonts } from "./modalStyles"
import React from 'react'

const ViewPageButton = ({toggleShowPopup, theme}) => {

    const { buttonWrapper } = useButtonWrapperFonts(theme)

    const closePopup = (e) => (e.preventDefault(), toggleShowPopup(false))
    

    const buttonProps = {
        onClick: (e) => closePopup(e),
        overrides: { 
            fontWeight: "700",
            fontSize: "14px",
            width: "70%"
        },
    }

    return (
        <DialogActions 
            className={buttonWrapper}
        >
            <ThemedButton {...buttonProps} >
                View Page
            </ThemedButton>
        </DialogActions>
    )
}

export default ViewPageButton
