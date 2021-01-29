import RetirementSpending  from  "./sliders/SalaryAndExpenseSliders/RetirementSpending"
import PercentIncomeSaved  from  "./sliders/SalaryAndExpenseSliders/PercentIncomeSaved"
import SalaryGrowthRate    from  "./sliders/SalaryAndExpenseSliders/SalaryGrowthRate"
import { dollarFormat }    from  "../../../../../../modules/clientFunctions"
import Salary              from  "./sliders/SalaryAndExpenseSliders/Salary"
import CurrentSavings      from  "./sliders/SavingsSliders/CurrentSavings"
import SavingsROI          from  "./sliders/SavingsSliders/SavingsROI"
import LifespanAge         from  "./sliders/AgeSliders/LifespanAge"
import SliderSection       from  "./sliders/Wrappers/SliderSection"
import CurrentAge          from  "./sliders/AgeSliders/CurrentAge"
import RetireAge           from  "./sliders/AgeSliders/RetireAge"
import React               from  "react"
import "./styles/chartControls.css"


const ChartControls = (props) => {

    const {
        /* state */
        salary, 
        endingAge, 
        savingsROI, 
        currentAge, 
        lifespanAge, 
        currentSavings, 
        salaryGrowthRate, 
        percentIncomeSaved, 
        retirementSpending, 
        /* setState */
        setSalary,
        setEndingAge,
        setCurrentAge,
        setROISavings,
        setLifespanAge,
        setCurrentSavings,
        setSalaryGrowthRate,
        setPercentIncomeSaved,
        setRetirementSpending,
    } = props.fromRetirement



    /* ----------------- Section 1 ----------------- */

    const milestonesSection = {
        header: "Age Milestones",
        flexItems: {
            item1: {
                label: "Current Age",
                sliderComponent: CurrentAge,
                sliderProps: {
                    setCurrentAge,
                    currentAge, 
                    endingAge, 
                } 
            },
            item2: {
                label: "Retirement Age",
                sliderComponent: RetireAge,
                sliderProps: {
                    setEndingAge, 
                    lifespanAge,
                    currentAge,
                    endingAge, 
                } 
                
            },
            item3: {
                label: "Lifespan",
                sliderComponent: LifespanAge,
                sliderProps: {
                    setLifespanAge, 
                    lifespanAge, 
                    endingAge,
                } 
            }
        }
    }

    /* ----------------- Section 2 ----------------- */

    const workAndRewardsSection = {
        header: "Work & Rewards",
        flexItems: {
            item1: {
                label: "Income",
                sliderComponent: Salary,
                sliderProps: {
                    dollarFormat,
                    setSalary,
                    salary, 
                }
            },
            item2: {
                label: "Income Growth Rate",
                sliderComponent: SalaryGrowthRate,
                sliderProps: {
                    setSalaryGrowthRate,
                    salaryGrowthRate, 
                } 
            },
            item3: {
                label: "% Income Saved",
                sliderComponent: PercentIncomeSaved,
                sliderProps: {
                    setPercentIncomeSaved,
                    percentIncomeSaved, 
                } 
            }
        }
    }

    /* ----------------- Section 3 ----------------- */

    const saveAndRetireSection = {
        header: "Save & Retire",
        flexItems: {
            item1: {
                label: "Current Savings",
                sliderComponent: CurrentSavings,
                sliderProps: {
                    setCurrentSavings,
                    currentSavings, 
                    dollarFormat,
                }

            },
            item2: {
                label: "Savings ROI",
                sliderComponent: SavingsROI,
                sliderProps: {
                    setROISavings,
                    savingsROI, 
                } 
            },
            item3: {
                label: "Retirement Spending",
                sliderComponent: RetirementSpending,
                sliderProps: {
                    setRetirementSpending,
                    retirementSpending, 
                    dollarFormat,
                } 
            }
        }
    }


    return (
        <div className='chart-controls'>   
            <SliderSection 
                fromChartControls={milestonesSection} 
            />
            <SliderSection 
                fromChartControls={workAndRewardsSection}        
            />
            <SliderSection 
                fromChartControls={saveAndRetireSection}  
            />
        </div>
    )
}

export default ChartControls
