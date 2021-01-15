import React from 'react'

const DelButton = (props) => {

    const {
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
    } = props.fromIncomeAccordion
    

    const handleDeleteIncomeIcons = (e) => {
        e.preventDefault()
        toggleIncomeDeleteIcons(!showIncomeDeleteIcons)
    }


    const useStyles = makeStyles({
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#22c1c3",
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
