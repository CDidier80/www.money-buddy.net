import React from 'react'
import { 
    Button, 
    makeStyles,
} from '@material-ui/core/'

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
            fontSize: smallerButtons ? "8px" : "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#2c7b71",
            padding: "0 5px 0 5px"
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
