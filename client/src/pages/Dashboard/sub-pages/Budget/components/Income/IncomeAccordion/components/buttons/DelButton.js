import { Button, makeStyles } from '@material-ui/core/'
import React from 'react'

const DelButton = (props) => {

    const {
        smallerButtons,
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
    } = props.fromIncomeAccordion
    

    const handleDeleteIncomeIcons = (e) => {
        e.preventDefault()
        toggleIncomeDeleteIcons(!showIncomeDeleteIcons)
    }


    const useStyles = makeStyles({
        deleteButton: {
            fontWeight: "700",
            padding: "0 5px 0 5px",
            fontFamily: "Lato, sans-serif",
            fontSize: smallerButtons ? "8px" : "9px",
            color: showIncomeDeleteIcons ? "#e6a824" : "#2c7b71",
        }
    })

    
    const classes = useStyles()


    return (
        <Button 
            className={classes.deleteButton}
            onClick={(e) => handleDeleteIncomeIcons(e)}
        >
            {showIncomeDeleteIcons ? "Cancel Delete" : "Delete Income"}
        </Button>
    )
}

export default DelButton
