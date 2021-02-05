export const formatToCurrency = (number) => {
    try {
        let formattedCell = number.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        return formattedCell
        
    } catch (error) {
        throw(error)
    }
}


export const filterNumbers = (e, updateRawNumber) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const { value } = e.target
    const userClearedCell = (value === "")
    if (userClearedCell) {
        updateRawNumber(0)
        return
    }
    const invalidCharacterEntered = !(numbers.includes(value.charAt(value.length-1)))
    if (invalidCharacterEntered) {
        return
    }
    const invalidLeadingZero = (value.length > 1 && value.charAt(0) === "0")
    if (invalidLeadingZero) {
        updateRawNumber(value.charAt(1))
        return
    }
    updateRawNumber(value)
}