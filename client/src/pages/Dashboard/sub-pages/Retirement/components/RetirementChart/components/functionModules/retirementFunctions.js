import { calcNewBalance } from "./totalSavings"

export const calcSavingsThruRetirement = (
    startingRetirementSavings,
    retirementSpending, 
    remainingLifeYrs, 
    savingsROI
) => {
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