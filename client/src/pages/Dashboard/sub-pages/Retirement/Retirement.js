import RetirementChart from "./components/RetirementChart/RetirementChart"
import ChartControls from "./components/ChartControls/ChartControls"
import PageHeader from "./components/PageHeader/PageHeader"
import React, {useState, useEffect} from 'react'

const Retirement = (props) => {

    const [endingAge, setEndingAge] = useState(65)
    const [currentAge, setCurrentAge] = useState(30)
    const [lifeSpanAge, setLifespanAge] = useState(78)

    const [salary, setSalary] = useState(50000)
    const [savingsROI, setROISavings] = useState(5)
    const [currentSavings, setCurrentSavings] = useState(0)
    const [salaryGrowthRate, setSalaryGrowthRate] = useState(2)
    const [percentIncomeSaved, setPercentIncomeSaved] = useState(20)

    const [retirementSpending, setRetirementSpending] = useState(50000)

    const hookValues = {
        salary, 
        endingAge, 
        savingsROI, 
        currentAge, 
        lifeSpanAge, 
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



    return (
        <div>
            <PageHeader />
            <RetirementChart 
                {...props}
                fromRetirement={{...hookValues}}
            />
            {/* <ChartControls 
                fromRetirement={{...hookSetters}}
            /> */}
            
        </div>
    )
}

export default Retirement
