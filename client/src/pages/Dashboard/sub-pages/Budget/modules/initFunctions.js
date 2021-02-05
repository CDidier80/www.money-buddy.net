const initNamesTotals = (cats) => {
    let categoryTotals = []
    let categoryNames = []
    let totalExpenses = 0
    
    cats.forEach((category) => {
        const { expenses, name } = category
        if (expenses.length > 0) {
            const total = expenses.reduce((accumulator, currentValue) => {
                return accumulator += currentValue.amount
            }, 0)
            categoryTotals.push([total, Math.round(total/12)])
            categoryNames.push(name)
            totalExpenses += total
        }
    })

    const states = [
        categoryNames, 
        categoryTotals, 
        [totalExpenses, Math.round(totalExpenses/12)]
    ]
    return states
}


const initIncomeTotals = (incomes) => {
    let incomeTotal = 0
    for (let i = 0; i <= incomes.length -1; i++) {
        const incomeItem = incomes[i]["amount"]
        incomeTotal += incomeItem
    }
    return([incomeTotal, Math.round(incomeTotal/12)])
}


module.exports = {
    initIncomeTotals,
    initNamesTotals,
}