import RetirementChart     from  "./components/RetirementChart/RetirementChart"
import ChartControls       from  "./components/ChartControls/ChartControls"
import Header              from  "../../components/reuseable/Header"
import React, { useState } from  "react"
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

    const headerProps = {
        text: "RETIREMENT",
        overrides: {
            marginBottom: "20px"
        }
    }

    return (
        <div className="retirement">
            <Header
                {...headerProps}
            />
            <RetirementChart 
                {...props}
                fromRetirement={{...hookValues}}
            />
            <ChartControls 
                {...props}
                fromRetirement={{...hookSetters, ...hookValues}}
            />
            
        </div>
    )
}

export default Retirement
