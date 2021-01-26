export const makeXAxisAgeLabels = (lifeSpanAge, currentAge, endingAge) => {
    const labelsLength = lifeSpanAge - currentAge
    const firstLabel = `Age ${currentAge}`
    const secondLabel = currentAge + 1
    const retireLabel = `Retire at ${endingAge}`

    let labels = [firstLabel, secondLabel]
    for (let i=2; i<labelsLength - 1; i++) {
        const prevAge = labels[i - 1]
        if (prevAge + 1 === endingAge){
            labels.push(retireLabel)
        } else if (prevAge === retireLabel){
            const lastIntAge = labels[i-2]
            const nextAge = lastIntAge + 2
            labels.push(nextAge)
        } else {
            const nextAge = prevAge + 1
            labels.push(nextAge)
        }
    }
    return labels
}

export const fiveYearTicks = (value, index, values) => {
    if (typeof value === "string"){
        return value
    }
    if (values.length <= 10) {
        return value
    } 
    const fiveYearMarker = ((value) % 5 === 0)
    return fiveYearMarker ? value : ""
}