import React, { useState, useEffect } from 'react'
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import InflowsTable from "../InflowsTable/InflowsTable"
import { 
    makeStyles,
    Accordion,
} from '@material-ui/core';




const InflowsAccordion = (props) => {

     /* -------------------------- PROPS ------------------------- */


    /* -------------------------- STATE ------------------------- */
    const [opened, toggleOpened] = useState(false)
    const [showInflowDeleteIcons, toggleInflowDeleteIcons] = useState(false)

    /* -------------------------- useEffects ------------------------- */

    // useEffect(() => {
    // }, [])

    /* -------------------------- FUNCTIONS ------------------------- */
    // const setDeleteIcons = (e) => {
    //     e.preventDefault()
    //     toggleDeleteIcons(!showDeleteIcons)
    // }

    const handleExpansion = (e) => {
        toggleOpened(!opened)
        console.log("changed")
    }


    const useStyles = makeStyles({
        // ...unconditionalStyles, 
        // deleteButton: {
        //     fontSize: "9px",
        //     fontWeight: "700",
        //     fontFamily: "Lato, sans-serif",
        //     color: showDeleteIcons ? "#22c1c3" : "#e6a824",
        //     padding: "0 5px 0 5px"
        // },
        accordion: {
            marginTop: "5px",
        }
    })

    const classes = useStyles()

    /* --------------------- PROPS FOR CHILDREN --------------------- */

    const propsForInflowsTable = {
        showInflowDeleteIcons,
        toggleInflowDeleteIcons,
    }

    return (
        <div>
            <Accordion 
                className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab opened={opened}/>
                <InflowsTable 
                    {...props} 
                    fromInflowsAccordion={{...propsForInflowsTable}}
                
                />
            </Accordion>
        </div>
    )
}

export default InflowsAccordion


