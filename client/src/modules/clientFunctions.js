const taggedLog = (varObj) => {
    const name = Object.keys(varObj)[0]
    console.log(`${name}: `, varObj[name])
}

export const currencyFormat = (value) => {

    let formattedValue = value.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, 
    })

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

export class Helpers {
    static taggedLog (varObj) {
        const name = Object.keys(varObj)[0]
        console.log(`${name}: `, varObj[name])
    }
}


export const filterNumbers = (e, updateRawNumber) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const { value } = e.target
    // convert users blank entries to 0 values
    const userClearedCell = (value === "")
    if (userClearedCell) {
        updateRawNumber(0)
        return
    }

    // do nothing if user enters a non-number character
    const invalidCharacterEntered = !(numbers.includes(value.charAt(value.length-1)))
    if (invalidCharacterEntered) {
        return
    }

    // don't allow numbers to lead with 0s unless 0 is the value of the cell
    const invalidLeadingZero = (value.length > 1 && value.charAt(0) === "0")
    if (invalidLeadingZero) {
        updateRawNumber(value.charAt(1))
        return
    }
    updateRawNumber(value)
}