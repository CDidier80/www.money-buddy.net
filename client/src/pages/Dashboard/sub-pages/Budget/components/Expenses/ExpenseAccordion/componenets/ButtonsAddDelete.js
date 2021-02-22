import { 
    Button,
    ButtonGroup,
    AccordionDetails,
} from '@material-ui/core'
import React from 'react'
import { useStyles } from "./styles"


const ButtonsAddDelete = (props) => {

    /*  props */

    const {
        addCategory,
        setDeleteIcons,
        showDeleteIcons
    } = props.fromExpenseAccordion

    
    /*  styles */

    const classes = useStyles(props.theme)
    const { deleteButtonIconsDisplay: dbid, deleteButtonNoIcons: dbni } = classes
    const currentClass = showDeleteIcons ? dbid : dbni

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
                    className={currentClass}
                    onClick={(e) => setDeleteIcons(e)}
                >
                    {showDeleteIcons ? "Cancel Delete" : "Delete Category"}
                </Button>
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default ButtonsAddDelete


