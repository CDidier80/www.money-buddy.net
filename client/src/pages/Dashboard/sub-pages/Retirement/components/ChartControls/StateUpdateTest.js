import React from 'react'

const StateUpdateTest = (props) => {

    const {
        salary, 
        endingAge, 
        savingsROI, 
        currentAge, 
        lifeSpanAge, 
        currentSavings, 
        salaryGrowthRate, 
        percentIncomeSaved, 
        retirementSpending, 
    } = props.fromRetirement

    // console.log(props)

    return (
        <div>
            <p className="lizzies-test"> 
                {`salary: ${salary}`}             
            </p>
            <p className="lizzies-test"> 
                {`endingAge: ${endingAge}`}          
            </p>
            <p className="lizzies-test"> 
                {`savingsROI: ${savingsROI}`}         
            </p>
            <p className="lizzies-test"> 
                {`currentAge: ${currentAge}`}         
            </p>
            <p className="lizzies-test"> 
                {`lifeSpanAge: ${lifeSpanAge}`}        
            </p>
            <p className="lizzies-test"> 
                {`currentSavings: ${currentSavings}`}     
            </p>
            <p className="lizzies-test"> 
                {`salaryGrowthRate: ${salaryGrowthRate}`}   
            </p>
            <p className="lizzies-test"> 
                {`percentIncomeSaved: ${percentIncomeSaved}`} 
            </p>
            <p className="lizzies-test"> 
                {`retirementSpending: ${retirementSpending}`} 
            </p>
        </div>
    )
}

export default StateUpdateTest
