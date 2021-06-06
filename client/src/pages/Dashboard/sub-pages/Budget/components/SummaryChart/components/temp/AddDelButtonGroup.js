import { 
    makeStyles,
    ButtonGroup,
    AccordionDetails, 
} from '@material-ui/core/'
import React from 'react'
import DelButton from "./DelButton"
import AddButton from "./AddButton"

const AddDelButtonGroup = props => {

    const useStyles = makeStyles( props => {

        const { 
            smallerButtons, 
            iconsDisplayed, 
            variant,
            theme, 
        } = props
        const { primary: p, secondary: s} = theme.palette
        const [ toggledOn, toggledOff ] = variant === "secondary" ? 
            [ p.main, s.main ] :
            [ s.main, p.main ]
        const padding = props.fromIncomeAccordion.smallerButtons ? 
            { padding: "8px 16px 8px 16px" } : {}

        const smallerText = props.smallerButtons && "8px"

        return {
            buttonGroup: {
                color: p.primary.main,
                maxWidth: "890px",
                margin: "auto",
                ...padding,
            },
            deleteButton: {
                ...theme.lato,
                fontWeight: "700",
                padding: "0 5px 0 5px",
                fontSize: smallerButtons ? "8px" : "9px",
                color: iconsDisplayed ? toggledOn : toggledOff,
            },
            addButton: {
                color: "#2c7b71",
                ...theme.lato,
                fontWeight: "700",
                padding: "0 5px 0 5px",
                fontSize: smallerText || "9px",
            },
        }
    })

    const classes = useStyles(props)

    return (
        <AccordionDetails className={classes.buttonGroup}>
            <ButtonGroup 
                variant="text" 
                color="primary" 
                aria-label="button group"
            >
                <AddButton 
                    addButton={classes.addButton}
                    { ...props } 
                />
                <DelButton 
                    deleteButton={classes.deleteButton}
                    { ...props } 
                />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default AddDelButtonGroup
