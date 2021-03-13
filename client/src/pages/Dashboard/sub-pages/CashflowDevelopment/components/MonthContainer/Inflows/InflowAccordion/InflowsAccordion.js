import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { useInflowsAccordionStyles } from "../../styles/styles"
import InflowsTable from "../InflowsTable/InflowsTable"
import { Accordion } from '@material-ui/core'
import React, { useState } from 'react'


const InflowsAccordion = (props) => {

    /* -------------------------- STATE ------------------------- */
    const [opened, toggleOpened] = useState(true)
    const [showInflowDeleteIcons, toggleInflowDeleteIcons] = useState(false)

    /* -------------------------- FUNCTIONS ------------------------- */

    const handleExpansion = (e) => {
        toggleOpened(!opened)
    }

    const { accordion } = useInflowsAccordionStyles(props.theme)

    /* --------------------- PROPS FOR CHILDREN --------------------- */

    const propsForInflowsTable = {
        showInflowDeleteIcons,
        toggleInflowDeleteIcons,
        ...props,
    }

    return (
        <div>
            <Accordion 
                className={accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab expanded={opened} />
                <InflowsTable {...propsForInflowsTable} />
            </Accordion>
        </div>
    )
}

export default InflowsAccordion


