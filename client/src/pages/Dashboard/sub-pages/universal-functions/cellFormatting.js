export const currencyFormat = (value) => {
    let formattedValue = value.toLocaleString('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
        style: 'currency', 
        currency: 'USD',
    })
    if (value < 0){
        formattedValue = "-" + formattedValue
    }
    return formattedValue
}

/* -- version that will not attach "-" to negative numbers -- */

export const currencyAbsValue = (value) => {
    let formattedValue = value.toLocaleString('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
        style: 'currency', 
        currency: 'USD',
    })
    return formattedValue
}

/* -- callback version for charts -- */

export const currencyChartCallback = {
    callback: (value) => {
    let formattedValue = value.toLocaleString('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
        style: 'currency', 
        currency: 'USD',
    })
    if (value < 0){
        formattedValue = "-" + formattedValue
    }
    return formattedValue
}}