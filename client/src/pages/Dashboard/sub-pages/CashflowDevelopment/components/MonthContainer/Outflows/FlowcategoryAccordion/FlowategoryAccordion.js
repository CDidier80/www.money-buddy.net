import React, { useState, useEffect, memo } from 'react';
import CategoryDeletePopup from "../FlowcategoryPopups/FlowcategoryDeletePopup"
import OutflowsTable from "../OutflowsTable/OutflowsTable"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { 
    Accordion,
    AccordionDetails,
    makeStyles
} from '@material-ui/core'
import ButtonsAddDel from './components/ButtonsAddDel';



const FlowcategoryAccordion = memo((props) => {

    const {memoTicker} = props.fromOutflowsAccordion

    /* -------------------------- STATE ------------------------- */

    const [lengthOfOutflows, setOuflowsLength] = useState(0)
    const [render,rerenderOutflowCategory] = useState(false)
    const [showFlowcategoryDeletePopup, toggleFlowcategoryDeletePopup ]= useState(false)
    const [showOutflowDeleteIcons, toggleOutflowDeleteIcons] = useState(false)

    /* ------------------------ FUNCTIONS ----------------------- */

    useEffect(() => {
    }, [lengthOfOutflows])


    const useStyles = makeStyles({
        accordionDetails: {
            padding: "10px 3px 0 3px",
        },
        categoryWrapper: {
            width: "100%",
            margin: "0 auto",

        },
        accordion: {
            // marginBottom: "10px",
            width: "100%",
        },
    })
    
    const classes = useStyles()


    const categoryDeletePopupProps = {
        showFlowcategoryDeletePopup,
        rerenderOutflowCategory,
        toggleFlowcategoryDeletePopup,
        render
    }

    const buttonsAddDelProps = {
        lengthOfOutflows,
        setOuflowsLength,
        toggleOutflowDeleteIcons,
        showOutflowDeleteIcons
    }

    const accordionDropdownTabProps = {
        showFlowcategoryDeletePopup, 
        toggleFlowcategoryDeletePopup
    }

    const outflowsTableProps = {
        showOutflowDeleteIcons,
        rerenderOutflowCategory,
        render
    }

    return ( memoTicker == 0 ? <div></div> :
        <AccordionDetails 
            className={classes.accordionDetails}
        >
            <div className={classes.categoryWrapper}>
                {showFlowcategoryDeletePopup && 
                    <CategoryDeletePopup 
                        {...props}
                        fromFlowcategoryAccordion={{...categoryDeletePopupProps}}
                    />
                }
                <Accordion className={classes.accordion}>
                    <AccordionDropdownTab 
                        {...props}
                        fromFlowcategoryAccordion={{...accordionDropdownTabProps}}
                    />
                    {/* <ButtonsAddDel 
                        {...props}
                        fromFlowcategoryAccordion={{...buttonsAddDelProps}}
                    /> */}
                    <OutflowsTable 
                        {...props} 
                        fromFlowcategoryAccordion={{...outflowsTableProps}}
                    />
                </Accordion>
            </div>
        </AccordionDetails>
    )
}, (prevProps, nextProps) => {
    const {memoTicker: prevMemoTicker} = prevProps.fromOutflowsAccordion
    const {memoTicker: nextMemoTicker} = nextProps.fromOutflowsAccordion
    if (nextMemoTicker == 1) {
        return false
    } else {
        return (prevMemoTicker !== nextMemoTicker) 
    }
})

export default FlowcategoryAccordion