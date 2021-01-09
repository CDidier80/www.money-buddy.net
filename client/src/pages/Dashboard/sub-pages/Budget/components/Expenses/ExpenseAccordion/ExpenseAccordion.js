import React, { useState, useEffect } from 'react'
import CategoryPopup from "../CategoryPopups/CategoryPopup"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion"
import { conditionlessStyles } from "./styles/useStyles"
import { 
    Tooltip,
    makeStyles,
    Button,
    ButtonGroup,
    Typography, 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions
} from '@material-ui/core';



const ExpenseAccordion = (props) => {

    {/*  PROPS */}

    const { newCategories } = props.categoryHooks
    

    {/*  STATE  */}
    const [showAddCategoryPanel, toggleAddCategoryPanel] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)

    // must keep -- optimizes performance
    const [renderExpAccordion, rerenderExpenseAccordian ] = useState(false)


    {/*  FUNCTIONS  */}

    useEffect(() => {
    }, [renderExpAccordion])

    const addCategory = (e) => {
        e.preventDefault()
        toggleAddCategoryPanel(true)
    }

    const setDeleteIcons = (e) => {
        e.preventDefault()
        toggleDeleteIcons(!showDeleteIcons)
    }

    const useStyles = makeStyles({
        ...conditionlessStyles, 
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })

    const classes = useStyles()


    return (
        <div>
            { showAddCategoryPanel && 
                <CategoryPopup 
                    {...props} 
                    toggleAddCategoryPanel={toggleAddCategoryPanel}
                />
            }

            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    <Typography 
                        className={classes.heading}
                    >
                        Expenses
                    </Typography>
                </AccordionSummary>

                <AccordionDetails >
                    <ButtonGroup className={classes.buttonGroup} 
                        variant="text" 
                        color="primary" 
                        aria-label="text primary button group"
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

                {newCategories.map((category, index) => (
                    <AccordionDetails key={`${20000 + index}`} >
                        <CategoryAccordion 
                            {...props} 
                            category={category} 
                            categoryIndex={index}
                            showDeleteIcons={showDeleteIcons}
                            rerenderExpenseAccordian={rerenderExpenseAccordian}
                            renderExpAccordion={renderExpAccordion}
                        />
                    </AccordionDetails>
                ))}
            </Accordion>
        </div>
    )
}

export default ExpenseAccordion


