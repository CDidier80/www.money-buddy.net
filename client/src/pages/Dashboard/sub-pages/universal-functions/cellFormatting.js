export const format = (value) => {

    let formattedValue = value.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
    })
    if (value < 0){
        formattedValue = "-" + formattedValue
    }
    return formattedValue
}