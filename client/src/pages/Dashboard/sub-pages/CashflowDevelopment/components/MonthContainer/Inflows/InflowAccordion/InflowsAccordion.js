import React, { useState, useEffect } from 'react'
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import InflowsTable from "../InflowsTable/InflowsTable"
import { 
    makeStyles,
    Accordion,
} from '@material-ui/core';




const InflowsAccordion = (props) => {

    /* -------------------------- STATE ------------------------- */
    const [opened, toggleOpened] = useState(true)
    const [showInflowDeleteIcons, toggleInflowDeleteIcons] = useState(false)

    /* -------------------------- FUNCTIONS ------------------------- */

    const handleExpansion = (e) => {
        toggleOpened(!opened)
    }


    const useStyles = makeStyles({
        accordion: {
            marginTop: "5px",
            padding: "3px"
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
                <AccordionDropdownTab expanded={opened}/>
                <InflowsTable 
                    {...props} 
                    fromInflowsAccordion={{...propsForInflowsTable}}
                />
            </Accordion>
        </div>
    )
}

export default InflowsAccordion


