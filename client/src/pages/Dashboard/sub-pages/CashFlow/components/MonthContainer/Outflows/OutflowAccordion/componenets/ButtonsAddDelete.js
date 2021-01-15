import React from 'react'
import { 
    makeStyles,
    Button,
    ButtonGroup,
    AccordionDetails,
} from '@material-ui/core';



const ButtonsAddDelete = (props) => {

    {/*  PROPS */}

    const {
        showDeleteIcons,
        toggleDeleteIcons
    } = props.fromOutflowsAccordion


    const useStyles = makeStyles({
        button: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: "#e6a824",
            padding: "0 5px 0 5px"
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })

    const classes = useStyles()


    const addCategory = (e) => {
        e.preventDefault()
        toggleAddCategoryPanel(true)
    }


    const setDeleteIcons = (e) => {
        e.preventDefault()
        toggleDeleteIcons(!showDeleteIcons)
    }


    return (
        <AccordionDetails >
            <ButtonGroup
                variant="text" 
                color="primary" 
                aria-label="text primary button group"
                className={classes.buttonGroup}
            >
                <Button 
                    className={classes.button}
                    onClick={(e) => addCategory(e)}
                >
                    Add Category
                </Button>
                <Button 
                    className={classes.deleteButton}
                    onClick={(e) => setDeleteIcons(e)}
                >
                    {showDeleteIcons ? "Cancel Delete" : "Delete Category"}
                </Button>
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default ButtonsAddDelete


