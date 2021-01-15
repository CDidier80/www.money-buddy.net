import React, { useState, useEffect } from 'react'
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import SummaryTable from "./components/SummaryTable"
import { 
    makeStyles,
    Accordion,
} from '@material-ui/core';




const SummaryAccordion = (props) => {

    {/*  PROPS */}


    {/*  STATE  */}
    // const [showAddCategoryPanel, toggleAddCategoryPanel] = useState(false)
    // const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [opened, toggleOpened] = useState(false)

    {/*  useEffect  */}

    // useEffect(() => {
    // }, [])

    {/*  FUNCTIONS  */}
    // const setDeleteIcons = (e) => {
    //     e.preventDefault()
    //     toggleDeleteIcons(!showDeleteIcons)
    // }

    const handleExpansion = (e) => {
        toggleOpened(!opened)
        console.log("changed")
    }


    // const useStyles = makeStyles({
    //     ...unconditionalStyles, 
    //     deleteButton: {
    //         fontSize: "9px",
    //         fontWeight: "700",
    //         fontFamily: "Lato, sans-serif",
    //         color: showDeleteIcons ? "#22c1c3" : "#e6a824",
    //         padding: "0 5px 0 5px"
    //     },
    // })

    // const classes = useStyles()

    return (
        <div>
            <Accordion 
                // className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab opened={opened}/>
                <SummaryTable {...props} />
            </Accordion>
        </div>
    )
}

export default SummaryAccordion


