const divideDefaultsAndUserSources = (incomesArrayCopy) => {
    let userIncomes = []
    let sources = []
    for (let i = 0; i <= incomesArrayCopy.length -1; i++){
        const { source } = incomesArrayCopy[i]
        const defaultOccurence = source.indexOf("income source #")
        if (defaultOccurence === 0){
            const lastCharNumber = parseInt(source.charAt(source.length - 1))
            sources.push(lastCharNumber)
        } else {
            userIncomes.push(incomesArrayCopy[i])
        }
    }
    return [userIncomes, sources]
}


const insertionSort = (sources) => {
    for (let i = 1; i < sources.length; i++) {
        let currentIndex = i
        let valueToSort = sources[currentIndex]
        let leftIndex = i - 1
        while (0 <= leftIndex && sources[leftIndex] > valueToSort) {
            sources[leftIndex + 1] = sources[leftIndex]
            leftIndex -= 1
        }
        sources[leftIndex + 1] = valueToSort
    }
    return sources
}


const findGapInNumbers = (sources) => {
    const iterCount = sources.length-1
    for (let i = 0; i <= iterCount; i++) {
        if (i+1 === sources[i]) {
            if(i === iterCount){
                sources.push(i+2)
            } else {
                continue
            }
        } else {
            sources.splice(i, 0, i+1)
            break
        }
    }
    return sources
}


module.exports = {
    divideDefaultsAndUserSources, 
    findGapInNumbers,
    insertionSort,
}