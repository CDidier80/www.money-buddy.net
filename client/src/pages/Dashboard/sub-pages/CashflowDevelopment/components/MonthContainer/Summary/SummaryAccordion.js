import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { makeSummaryAccordionStyles } from "../styles/styles"
import { makeStyles, Accordion } from '@material-ui/core'
import SummaryTable from "./components/SummaryTable"
import React, { useState } from 'react'




const SummaryAccordion = props => {

    const { thisMonth } = props.fromPaginatingContainer

    const [opened, toggleOpened] = useState(true)

    const handleExpansion = (e) => {
        toggleOpened(!opened)
    }

    const { accordion } = makeSummaryAccordionStyles(props.theme)

    return (
        <div>
            <Accordion 
                className={accordion}
                onChange={(e)=>handleExpansion(e)}
                expanded={opened}
            >
                <AccordionDropdownTab 
                    opened={opened}
                    month={thisMonth.month}
                />
                <SummaryTable { ...props } />
            </Accordion>
        </div>
    )
}

export default SummaryAccordion
