import { calcNewBalance } from "./totalSavings"

export const calcSavingsThruRetirement = (
    startingRetirementSavings,
    retirementSpending, 
    remainingLifeYrs, 
    savingsROI
) => {
    // for formula: https://docs.google.com/spreadsheets/d/1m5U2JZ8TvTnmD7PgFCTVkFg7lslFHaeg9HBvn8Xs-BM/edit#gid=1953494833
    // start with balance, add interest earned to balance, then subtract living exp for next balance
    // in future, this function can be expanded to return yearly interest earned
    let savingsBalanceArray = [startingRetirementSavings, ]
    for (let i = 1; i <= remainingLifeYrs; i++){
        const startingBalance = savingsBalanceArray[i-1]
        const balancePlusROI = calcNewBalance(startingBalance, savingsROI)
        const netBalance = balancePlusROI - retirementSpending
        savingsBalanceArray.push(netBalance)
    }
    const balancesEachRetiredYear = savingsBalanceArray.slice(1,)
    return balancesEachRetiredYear
}