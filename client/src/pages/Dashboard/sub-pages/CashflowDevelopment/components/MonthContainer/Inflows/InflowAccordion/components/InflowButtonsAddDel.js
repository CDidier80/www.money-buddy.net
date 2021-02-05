import { 
    insertionSort, 
    findGapInNumbers, 
    divideDefaultsAndUserSources, 
} from "../../../../../../../../universal-functions/sortingFunctions"
import { Button, ButtonGroup } from '@material-ui/core'
import React from 'react'


const InflowButtonsAddDel = (props) => {

    const {
        showInflowDeleteIcons,
        toggleInflowDeleteIcons,
    } = props.fromInflowsAccordion

    const useStyles = makeStyles({
        button: {
            fontSize: "9px",
            fontWeight: "700",
            color: "#22c1c3",
            padding: "0 5px 0 5px",
            fontFamily: "Lato, sans-serif",
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            padding: "0 5px 0 5px",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#22c1c3",
        }
    })
    
    const classes = useStyles()



    const addInflow = (e) => {
        e.preventDefault() 
        let inflowsArrayCopy = newIncomes
        let [userInflows, sources] = divideDefaultsAndUserSources(inflowsArrayCopy, "inflow")
        if (sources.length === 0){
            updateBudgetIncomes([
                ...inflowsArrayCopy, 
                {
                    source: "inflow source #1",
                    amount: 0
                }
            ])
            return
        } else {
            sources = insertionSort(sources)
            sources = findGapInNumbers(sources)
            const defaults = sources.map(num => ({source: ("income source #" + String(num)), amount: 0}))
            inflowsArrayCopy = [...userInflows, ...defaults]
        }   
    }


    const handleDeleteInflowIcons = (e) => {
        e.preventDefault()
        toggleInflowDeleteIcons(!showIncomeDeleteIcons)
    }


    return (
        <ButtonGroup 
            variant="text" 
            color="primary" 
            aria-label="text primary button group"
        >
            <Button 
                className={classes.button}
                onClick={(e) => addInflow(e)}
            >
                Add Inflow
            </Button>
            <Button 
                className={classes.deleteButton}
                onClick={(e) => handleDeleteInflowIcons(e)}
            >
                {showInflowDeleteIcons ? "Cancel Delete" : "Delete Inflow"}
            </Button>
        </ButtonGroup>
    )
}

export default InflowButtonsAddDel
