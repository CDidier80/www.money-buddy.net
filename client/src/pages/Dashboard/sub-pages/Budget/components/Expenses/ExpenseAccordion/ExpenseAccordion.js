import { 
    makeStyles,
    Accordion,
    useMediaQuery
} from '@material-ui/core'
import { staticStyles } from "./styles/staticStyles"
import ButtonsAddDelete from './componenets/ButtonsAddDelete'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import AccordionDropdownTab from "./componenets/AccordionDropdownTab"
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion"
import CategoryPopup from "../CategoryPopups/AddCategoryPopup/CategoryPopup"
import GradientWrapper from "../../../../../../../TopLevelComponents/GradientWrapper"


const ExpenseAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

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


    const useStyles = makeStyles(theme => {
        
        const { primary, secondary } = theme.palette

        return ({
            accordionWrapper: {
                padding: "6px"
            },
            ...staticStyles, 
            deleteButton: {
                color: showDeleteIcons ? primary.main : secondary.main,
                fontFamily: "Lato, sans-serif",
                padding: "0 5px 0 5px",
                fontWeight: "700",
                fontSize: "9px",
            },
        })
    })


    const classes = useStyles(props.theme)


    const buttonsAddDeleteProps ={
        addCategory,
        setDeleteIcons,
        showDeleteIcons
    }


    return (
        <GradientWrapper
            theme={props.theme}
            className={classes.accordionWrapper}
        >
            { showAddCategoryPanel && 
                <CategoryPopup 
                    {...props} 
                    toggleAddCategoryPanel={toggleAddCategoryPanel}
                />
            }
            <Accordion 
                expanded={expanded}
                className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab expanded={expanded} />
                <ButtonsAddDelete 
                    {...props}
                    fromExpenseAccordion={{...buttonsAddDeleteProps}}
                />
                {newCategories.map((category, index) => {
                    const categoryAccordionProps = {
                        fromExpenseAccordion: {
                            rerenderExpenseAccordian,
                            categoryIndex: index,
                            renderExpAccordion,
                            showDeleteIcons,
                            category,
                        }
                    }
                    return (
                        <CategoryAccordion 
                            key={`category-accordion-${index}`}
                            {...categoryAccordionProps}
                            {...props} 
                        />
                    )
                })}
            </Accordion>
        </GradientWrapper>
    )
}

export default ExpenseAccordion


