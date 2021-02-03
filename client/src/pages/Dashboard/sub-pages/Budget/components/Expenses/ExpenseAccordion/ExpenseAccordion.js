import React, { useState, useEffect, useLayoutEffect } from 'react'
import CategoryPopup from "../CategoryPopups/CategoryPopup"
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion"
import ButtonsAddDelete from './componenets/ButtonsAddDelete'
import AccordionDropdownTab from "./componenets/AccordionDropdownTab"
import { staticStyles } from "./styles/staticStyles"
import { 
    makeStyles,
    Accordion,
    useMediaQuery
} from '@material-ui/core';




const ExpenseAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { gradientWrapper } = props.fromApp
    const { newCategories } = props.fromBudget

    /* ---------------------- init MEDIA QUERY--------------------- */

    const autoExpandHeight = useMediaQuery('(min-height:1050px)', {noSsr: true})


    /* -------------------------- STATE ------------------------- */

    const [showAddCategoryPanel, toggleAddCategoryPanel] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [expanded, setExpanded] = useState(false)
    // keep -- optimizes performance
    const [renderExpAccordion, rerenderExpenseAccordian ] = useState(false)


    /* -------------------------- useEffect ------------------------- */

    useEffect(() => {
    }, [renderExpAccordion])


    useLayoutEffect(() => {
        if (autoExpandHeight && !expanded) {
            setExpanded(true)
        }
    }, [autoExpandHeight])

    

    /* -------------------------- FUNCTIONS ------------------------- */

    const addCategory = (e) => {
        e.preventDefault()
        toggleAddCategoryPanel(true)
    }


    const setDeleteIcons = (e) => {
        e.preventDefault()
        toggleDeleteIcons(!showDeleteIcons)
    }


    const handleExpansion = (e) => setExpanded(!expanded)



    const useStyles = makeStyles({
        accordionWrapper: {
            ...gradientWrapper,
            padding: "6px"
        },
        ...staticStyles, 
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })

    const classes = useStyles()


    const buttonsAddDeleteProps ={
        addCategory,
        setDeleteIcons,
        showDeleteIcons
    }


    return (
        <div className={classes.accordionWrapper}>
            { showAddCategoryPanel && 
                <CategoryPopup 
                    {...props} 
                    toggleAddCategoryPanel={toggleAddCategoryPanel}
                />
            }

            <Accordion 
                className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
                expanded={expanded}
            >
                <AccordionDropdownTab 
                    expanded={expanded}
                />
                <ButtonsAddDelete 
                    fromExpenseAccordion={{...buttonsAddDeleteProps}}
                />
                {newCategories.map((category, index) => {
                    const categoryAccordionProps = {
                        category,
                        categoryIndex: index,
                        showDeleteIcons,
                        rerenderExpenseAccordian,
                        renderExpAccordion
                    }
                    return (
                        <CategoryAccordion 
                            key={`${20000 + index}`}
                            {...props} 
                            fromExpenseAccordion={{...categoryAccordionProps}}
                        />
                    )
                })}
            </Accordion>
        </div>
    )
}

export default ExpenseAccordion


