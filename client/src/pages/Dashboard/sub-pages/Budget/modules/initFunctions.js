const checkPriorityName = (name) => {


    const priorityCategories = {
        'living':  0,
        'house':  0,
        'housing':  0,
        'utilities':  1,
        'util':  1,
        'cost of': 1, 
    }
    
    return name in priorityCategories ? [true, priorityCategories[name]] : [false]
}

const initNamesTotals = (cats) => {


    let categoryTotals = []
    let categoryNames = []
    let totalExpenses = 0

    cats.forEach((category) => {
        const { expenses, name } = category
        if (expenses.length > 0) {
            const total = expenses.reduce((runningTotal, expense) => {
                return runningTotal += expense.amount
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