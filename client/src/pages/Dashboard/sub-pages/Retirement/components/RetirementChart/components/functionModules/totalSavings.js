import { calcAccumulatingCareerSavings } from "./careerFunctions"
import { calcSavingsThruRetirement } from "./retirementFunctions"


export const calcNewBalance = (startingBalance, roi) => {
    let growthFactor = (100 + roi) / 100
    let newBalance = startingBalance * growthFactor
    return newBalance
}

export const calculateSavingsForecast = (savingsArgs) => {

    const {
        salary, 
        endingAge, 
        savingsROI, 
        currentAge, 
        currentSavings, 
        salaryGrowthRate, 
        retirementSpending, 
        percentIncomeSaved, 
        lifespanAge: lifeSpanAge, 
    } = savingsArgs

    const yearsToRetirement = endingAge - currentAge
    const remainingLifeYrs = lifeSpanAge - endingAge

    const savingsThruCareer = calcAccumulatingCareerSavings(
        percentIncomeSaved,
        yearsToRetirement,
        salaryGrowthRate, 
        currentSavings,
        salary
    )
        
    const startingRetirementSavings = savingsThruCareer[savingsThruCareer.length - 1]

    const savingsThruRetirement = calcSavingsThruRetirement(
        startingRetirementSavings,
        retirementSpending, 
        remainingLifeYrs, 
        savingsROI
    )

    const accumSavingsAllYears = [...savingsThruCareer, ...savingsThruRetirement]
    return accumSavingsAllYears
}