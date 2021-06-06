import { 
    makeStyles,
    ButtonGroup,
    AccordionDetails, 
} from '@material-ui/core/'
import React from 'react'
import MonthlyButton from "./MonthlyButton"
import AnnualButton from "./AnnualButton"

const CellButtonGroup = (props) => {

    const useStyles = makeStyles({
        buttonGroup: {
            borderBottom: "1px solid rgb(224, 224, 224)",
            borderBottomWidth: "1px",
            justifyContent: "center",
            display: "table-cell",
            alignItems: "center",
            textAlign: "center",
            margin: "0 auto",
            marginBottom: 0,
            padding: "6px",
            height: "25px",
        },
    })

    const classes = useStyles()

    return (
        <AccordionDetails 
            className={classes.buttonGroup}
            id={"accordion-button-group"}

        >
            <ButtonGroup 
                variant="text" 
                color="primary" 
                aria-label="button group"
            >
                <MonthlyButton { ...props } />
                <AnnualButton  { ...props } />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default CellButtonGroup
