import React, { useState, useEffect } from 'react'
import CategoryPopup from "../CategoryPopups/CategoryPopup"
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion"
import ButtonsAddDelete from './componenets/ButtonsAddDelete'
import AccordionDropdownTab from "./componenets/AccordionDropdownTab"
import { unconditionalStyles } from "./styles/unconditionalStyles"
import { 
    makeStyles,
    Accordion,
    AccordionDetails,
} from '@material-ui/core';




const ExpenseAccordion = (props) => {

    {/*  PROPS */}

    const { newCategories } = props.fromBudget

    console.log(newCategories)
    

    {/*  STATE  */}
    const [showAddCategoryPanel, toggleAddCategoryPanel] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [opened, toggleOpened] = useState(false)

    // must keep -- optimizes performance
    const [renderExpAccordion, rerenderExpenseAccordian ] = useState(false)


    {/*  useEffect  */}

    useEffect(() => {
    }, [renderExpAccordion])

    

    {/*  FUNCTIONS  */}

    const addCategory = (e) => {
        e.preventDefault()
        toggleAddCategoryPanel(true)
    }


    const setDeleteIcons = (e) => {
        e.preventDefault()
        toggleDeleteIcons(!showDeleteIcons)
    }


    const handleExpansion = (e) => {
        toggleOpened(!opened)
        console.log("changed")
    }


    const useStyles = makeStyles({
        ...unconditionalStyles, 
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
        <div>
            { showAddCategoryPanel && 
                <CategoryPopup 
                    {...props} 
                    toggleAddCategoryPanel={toggleAddCategoryPanel}
                />
            }

            <Accordion 
                className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab opened={opened}/>
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


