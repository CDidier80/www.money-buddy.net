const divideDefaultsAndUserSources = (incomesArrayCopy) => {
    let userIncomes = []
    let sources = []
    // console.log("incomesArrayCopy", incomesArrayCopy)
    for (let i = 0; i <= incomesArrayCopy.length -1; i++){
        // divide the incomesArrayCopy into arrays of defaultIncome items and
        // non default items 
        const { source } = incomesArrayCopy[i]
        const defaultOccurence = source.indexOf("income source #")
        if (defaultOccurence === 0){
            const lastCharNumber = parseInt(source.charAt(source.length - 1))
            console.log("lastCharNumber:", lastCharNumber)
            sources.push(lastCharNumber)
        } else {
            userIncomes.push(incomesArrayCopy[i])
        }
    }
    return [userIncomes, sources]
}


const insertionSort = (sources) => {
    // console.log("userIncomes:", userIncomes)
    // console.log("sources before sort: ", sources)
    // insertion-sort the sources array
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
    // console.log("sources: ", sources)
    // [1,2,3,4,7,9] ==>  looking for non-sequential numbers
    // indices   [0,1,2,3,4,5]      if value at index is not +1 higher, there's a break
    const iterCount = sources.length-1
    // console.log(iterCount, "itercount")
    for (let i = 0; i <= iterCount; i++) {
        console.log("iteration count:", i)
        if (i+1 === sources[i]) {
            if(i === iterCount){
                console.log("pushing to array end")
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
    insertionSort,
    findGapInNumbers
}