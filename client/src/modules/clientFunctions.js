export const currencyFormat = (value) => {

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

export const currencyChartCallback = {
    callback: (value) => {
        let formattedValue = value.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0, 
        })
        return formattedValue
    }
}

export const makeDeepClone = (object) => JSON.parse(JSON.stringify(object))


export const stringifyProps = (props) => {
    const propsOfTypeNumber = Object.values(props).filter(value => typeof value === "number")
    const numArrayToSingleString = propsOfTypeNumber.toString()
    return numArrayToSingleString
}


export const deepPropCheck = (prevProps, nextProps) => {
    const propsAreEqual = stringifyProps(prevProps) === stringifyProps(nextProps)
    const shouldRefuseRerender =  propsAreEqual ? true : false
    return shouldRefuseRerender
}


export const dollarFormat = (value, i) => {
    if (String(value).length < 4) {
        return `$${value}`
    } else {
        let valInThousands = Math.round(value / 1000)
        return `$${valInThousands}k`
    }
}

export const ternary = (condition, return1, return2) => condition ? return1 : return2