import RetirementChart     from  "./components/RetirementChart/RetirementChart"
import StateUpdateTest     from  "./components/ChartControls/StateUpdateTest"
import ChartControls       from  "./components/ChartControls/ChartControls"
import PageHeader          from  "./components/PageHeader/PageHeader"
import React, { 
    useState, 
    useEffect 
} from  "react"
import "./styles/retirement.css"

const Retirement = (props) => {

    /* --------------------------- STATE --------------------------- */

    /* --- age --- */
    const [endingAge, setEndingAge] = useState(65)
    const [currentAge, setCurrentAge] = useState(30)
    const [lifespanAge, setLifespanAge] = useState(78)

    /* --- savings --- */
    const [savingsROI, setROISavings] = useState(5)
    const [currentSavings, setCurrentSavings] = useState(500)
    const [percentIncomeSaved, setPercentIncomeSaved] = useState(20)

    /* --- salary/expenses --- */
    const [salary, setSalary] = useState(50000)
    const [salaryGrowthRate, setSalaryGrowthRate] = useState(2)
    const [retirementSpending, setRetirementSpending] = useState(50000)


    /* ------------------------- Listen to Window Size ------------------------ */

    // const [pageHeight, setPageHeight] = useState(window.innerHeight)
    // const [pageWidth, setPageWidth] = useState(window.innerWidth)

    // const setWindowSize = (e) => {
    //     setPageHeight(window.innerHeight)
    //     setPageWidth(window.innerWidth)
    // }
    
    // useEffect(() => {
    //     window.addEventListener("resize", setWindowSize)
    //     return () => window.removeEventListener("resize", setWindowSize)
    // }, [])
    

    /* ---------------------- PROPS FOR CHILDREN --------------------- */

    const hookValues = {
        salary, 
        endingAge, 
        savingsROI, 
        currentAge, 
        lifespanAge, 
        currentSavings, 
        salaryGrowthRate, 
        percentIncomeSaved, 
        retirementSpending, 
    }

    const hookSetters = {
        setSalary,
        setEndingAge,
        setCurrentAge,
        setROISavings,
        setLifespanAge,
        setCurrentSavings,
        setSalaryGrowthRate,
        setPercentIncomeSaved,
        setRetirementSpending,
    }

    // const sizes = {
    //     pageWidth,
    //     pageHeight,
    // }


    return (
        <div className="retirement">
            <PageHeader />
            <RetirementChart 
                {...props}
                fromRetirement={{...hookValues}}
                // sizes={{...sizes}}
            />
            <ChartControls 
                {...props}
                fromRetirement={{...hookSetters, ...hookValues}}
            />
            
        </div>
    )
}

export default Retirement
