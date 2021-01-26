import { calcNewBalance } from "./totalSavings"


/* calculate each annual salary between now and retirement */
/**
 * @param {int} yearsToRetirement Number of years remaining to earn/save money
 * @param {int} salaryGrowthRate percentage increase in salary each year
 * @param {int} salary starting salary
 */
const calcAnnualSalaries = (
    yearsToRetirement,
    salaryGrowthRate, 
    salary, 
    ) => {
    let annualSalaries = [salary, ]
    for (let i = 1; i<= yearsToRetirement; i++) {
        let prevYearSalary = annualSalaries[i-1]
        let nextSalary = calcNewBalance(prevYearSalary, salaryGrowthRate)
        annualSalaries.push(nextSalary)
    }  
    return annualSalaries
}


/* calculate saved portion of each annual salary */
/**
 * @param {int} percentIncomeSaved percent of salary added to savings
 * @param {array} annualSalaries salary each year of career
 */
const calcYrlyCareerSavings = ( 
    percentIncomeSaved, 
    annualSalaries
) => {
    const savingsRate = percentIncomeSaved / 100
    const savingsEachCareerYear = annualSalaries.map(salary => salary * savingsRate)
    return savingsEachCareerYear
}


/* calculate running total savings in each year of retirement */
/**
 * @param {int} yearsToRetirement Number of years remaining to earn/save money
 * @param {int} salaryGrowthRate percentage increase in salary each year
 * @param {int} salary starting salary
 */
const calcRunningTtlCareerSavings = (
    percentIncomeSaved,
    annualSalaries, 
    currentSavings,
) => {

    const savingsEachCareerYear = calcYrlyCareerSavings(
        percentIncomeSaved,
        annualSalaries
    )
    const firstYearSavings = currentSavings + savingsEachCareerYear[0]

    let runningTotalsCareerSavings = [firstYearSavings]

    for (let i=1; i <= savingsEachCareerYear.length-1; i++) {
        const lastYearTotal = runningTotalsCareerSavings[i-1]
        const thisYearSavings = savingsEachCareerYear[i]
        let accumulatedSavings = lastYearTotal + thisYearSavings
        runningTotalsCareerSavings.push(accumulatedSavings)
    }
    return runningTotalsCareerSavings
}


/* Wrapper function to run above functions sequentially */

export const calcAccumulatingCareerSavings = (
    percentIncomeSaved, 
    yearsToRetirement,
    salaryGrowthRate, 
    currentSavings,
    salary
) => {

    const salariesEachYear = calcAnnualSalaries(    
        yearsToRetirement,
        salaryGrowthRate, 
        salary, 
    )
    
    const runningTtlCareerSavings = calcRunningTtlCareerSavings(
        percentIncomeSaved, 
        salariesEachYear, 
        currentSavings
    )

    return runningTtlCareerSavings
}