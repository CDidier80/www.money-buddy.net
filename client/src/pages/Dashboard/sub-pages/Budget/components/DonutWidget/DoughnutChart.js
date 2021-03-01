import GradientWrapper from "../../../../../../TopLevelComponents/GradientWrapper"
import { createData, createOptions } from "./modules/donutFunctions"
import useMediaQueries from "./styles/useMediaQueries"
import { withTheme } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import "./styles/donutStyles.css"
import React, { 
    useEffect, 
    useState, 
    useRef 
} from 'react'


const DoughnutChart = (props) => {

    /* ---------------------------- PROPS ------------------------------ */

    const { categoryNames, categoryTotals} = props.fromBudget
    const { budgetRef } = props
    
    const headerRef = useRef()
    
    
    /* ---------------------------- STATE ------------------------------ */

    const [useSubpageRef, setUseSubpageRef] = useState(window.innerWidth <= 650)
    const [budgetWidth, setBudgetWidth] = useState("")
    const [monthly, setMonthly] = useState(false)
    const [width, setWidth] = useState(0)

    /* ------------------------- Listen to Window Size ------------------------ */

    const handleDimensions = (e) => {
        const oneColumn = window.innerWidth <= 650
        const { clientWidth: headWidth } = headerRef.current
        const { clientWidth: bWidth } = budgetRef.current
        setWidth(headWidth)
        setUseSubpageRef(oneColumn)
        setBudgetWidth(bWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleDimensions)
        handleDimensions()
        return () => window.removeEventListener("resize", handleDimensions)
    }, [width])

    const DATA = createData(categoryNames, categoryTotals, monthly)

    return ( 
        <GradientWrapper
            theme={props.theme}
            className={"gradient-wrapper donut"}
            overrides={useSubpageRef && { width: budgetWidth }}
        >
            <div className="budget-top-widgets" >
                <h3 
                    className="donut-header" 
                    ref={headerRef}
                >
                    Distribution of Spending
                </h3>
                <div 
                    style={{width: width, "flex-grow":1}}
                >
                    <Doughnut 
                        data={DATA}
                        maintainAspectRatio={false}
                        options={createOptions(useMediaQueries())}
                    />
                </div>
            </div>
        </GradientWrapper>
    )
}

export default withTheme(DoughnutChart)



