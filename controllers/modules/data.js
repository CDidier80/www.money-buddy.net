const defaultCategories = {
    "Housing & Utilities": [
        "Rent",
        "Electricity",
        "Water",
        "Sewage",
        "Gas",
        "Trash Collection",
        "Miscellanious"
    ],

    "Living" : [
        "Groceries",
        "Phone Bill",
        "Clothing"

    ],
    "Medical & Wellness" : [
        "Perscription Medication",
        "Primary Care Visits",
        "Health Insurance Premium",
        "Gym Membership"
    ],

    "Vehicle & Transportation" : [
        "Car Payment"
    ],

    "Debt" : [
        
    ],
    "Taxes" : [
    ],

    "Vacation & Travel" : [

    ],
    "Holidays & Gifts" : [
        "Christmas"
    ],
}


const defaultMonths = [
    "January",
    "February",
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const nextCalendarYear = (year, monthIndex, cashflowId) => {
    if (monthIndex === 0) {
        const nextTwelveMonths = defaultMonths.map(month => {
            const monthPayload = {
                year: year,
                month: month,
                cashflowId: cashflowId
            }
            return monthPayload
        })
        return nextTwelveMonths
    } 

    const nextYear = year + 1
    const nextYearStopIndex = 11 - monthIndex
    const remainingYear = defaultMonths.slice(monthIndex,)
    const nextYearMonths = defaultMonths.slice(0, nextYearStopIndex)

    const currentYearMonthsId = remainingYear.map(month => {
        const monthPayload = {
            year: year, 
            month: month, 
            cashflowId: cashflowId,
        }
        return monthPayload
    })

    const nextYearMonthsId = nextYearMonths.map(month => {
        const monthPayload = {
            year: nextYear, 
            month: month, 
            cashflowId: cashflowId,
        }
        return monthPayload
    })
    
    return [...currentYearMonthsId, ...nextYearMonthsId]
}


module.exports = {
    defaultCategories,
    defaultMonths,
    nextCalendarYear
}