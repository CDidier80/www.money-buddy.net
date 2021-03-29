import React from 'react'

const FlowcatPopupPrompt = (props) => {


    return (
        <DialogActions className={classes.buttonWrapper}>
            <Button 
                onClick={(e) => confirm(e)} 
                color="primary"
                className={classes.button}
            >
                Confirm
            </Button>
            <Button 
                onClick={(e) => closePopup(e)} 
                color="primary"
                className={classes.button}
            >
                Back
            </Button>
        </DialogActions>
    )
}

export default FlowcatPopupPrompt
