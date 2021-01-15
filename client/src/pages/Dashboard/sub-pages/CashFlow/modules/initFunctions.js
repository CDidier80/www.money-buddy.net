export const initTotalOutflow = (categories) => {
    // console.log("CATEGORIES RECEIVED FROM PROPS (initNameTotals()):", categories)
    let totalOutflows = 0
    categories.forEach((category) => {
        const { outflows } = category
        if (outflows.length > 0) {
            const total = outflows.reduce((accumulator, currentValue) => {
                return accumulator += currentValue.amount
            }, 0)
            totalOutflows += total
        }
    })
    return totalOutflows
}


export const initTotalInflow = (inflows) => {
    let inflowTotal = 0
    for (let i = 0; i <= inflows.length -1; i++) {
        const inflowItem = inflows[i]["amount"]
        inflowTotal += inflowItem
    }
    return(inflowTotal)
}
