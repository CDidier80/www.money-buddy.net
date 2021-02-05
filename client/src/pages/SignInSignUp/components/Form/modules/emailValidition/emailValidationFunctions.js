import emailExtensions from "./emailExtensions"


const checkPeriodCount = (textInput) => {
    const length = textInput.length
    let periodCount = 0
    for (let i=0; i <= length -1 ;  i++){
        if (textInput.charAt(i) === ".") {
            periodCount += 1
        }
    }
    return periodCount
}

const includesExtension = (textInput) => {
    const periodIndex = textInput.indexOf(".")
    const extensionStartIndex = periodIndex + 1
    const extension = (textInput.substring(extensionStartIndex)).toUpperCase()
    if (extension in emailExtensions) {
        return true
    } else {
        return false
    }
}


const validateEmailExtension = (textInput) => {
    const periodCount = checkPeriodCount(textInput)
    console.log(periodCount)
    if (periodCount != 1) {
        return false
    } 
    const validExtension = includesExtension(textInput)
    return validExtension
}


const checkATvalid = (textInput) => {
    const ATindex = textInput.indexOf("@")
    if (!(ATindex > 0)) {
        return false
    } else {
        return true
    }
}


const emailValidityCheck = (textInput) => {
    let valid = true
    const validityChecks = [validateEmailExtension, checkATvalid]
    validityChecks.forEach(check => {
        if (!check(textInput)){
            valid = false
        }
    })
    return valid
}

export default emailValidityCheck