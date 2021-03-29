import { 
    Accordion,
    AccordionDetails,
} from '@material-ui/core'
import React from 'react'
import { useFlowcategoryAccordionStyles } from "../../../styles/styles"


const OutflowsWrapper = ({children, theme}) => {

    const {
        accordionDetails: details,
        categoryWrapper: catWrapper,
        accordion
     } = useFlowcategoryAccordionStyles(theme)

    return (
        <AccordionDetails className={details} >
            <div className={catWrapper}>
                <Accordion className={accordion}>
                    {children}
                </Accordion>
            </div>
        </AccordionDetails>
    )
}

export default OutflowsWrapper
