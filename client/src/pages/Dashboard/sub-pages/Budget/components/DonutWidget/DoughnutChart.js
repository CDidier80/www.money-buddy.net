import GradientWrapper from "../../../../../../TopLevelComponents/GradientWrapper"
import { createData, createOptions } from "./modules/donutFunctions"
import { useMediaQuery, withTheme } from '@material-ui/core'
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

    /* ---------------------- init MEDIA QUERIES ----------------------- */
    
    const mq1 = useMediaQuery('(min-width:1800px)')
    const mq2 = useMediaQuery('(min-width:1400px)')
    const mq3 = useMediaQuery('(min-width:1100px)')
    const mq4 = useMediaQuery('(min-width:887px)' )
    const mq5 = useMediaQuery('(min-width:800px)' )
    const mq6 = useMediaQuery('(min-width:622px)' )
    const mq7 = useMediaQuery('(min-width:515px)' )

    const mediaQueries = { mq1, mq2, mq3, mq4, mq5, mq6, mq7 }

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
    }, [])

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
                    style={{width: width}}
                >
                    <Doughnut 
                        data={DATA}
                        maintainAspectRatio={false}
                        options={createOptions(mediaQueries)}
                    />
                </div>
            </div>
        </GradientWrapper>
    )
}

export default withTheme(DoughnutChart)



