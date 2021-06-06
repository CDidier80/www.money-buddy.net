import { useState } from 'react'

export const usePagination = props => {

    const {
        displayRange,
        pagMemoTicker,
        setDisplayRange,
        incrementPagTicker
    } = props

    const [backDisabled, setBackDisabled] = useState(true)
    const [nextDisabled, setNextDisabled] = useState(false)

    const enableAndDisableButtons = (nextDisplayRange) => {
        setNextDisabled(nextDisplayRange[2] === 11)
        setBackDisabled(nextDisplayRange[0] === 0)
    }
    
    const showNextThreeMonths = monthIndex => [monthIndex + 1, monthIndex + 2, monthIndex + 3]
    
    const showPrevThreeMonths = monthIndex => [monthIndex - 3, monthIndex - 2, monthIndex - 1]
    
    const setNextRange = (next) => next === 'next' 
        ? showNextThreeMonths(displayRange[2]) 
        : showPrevThreeMonths(displayRange[0])

    const paginate = (e, next) => {
        e.preventDefault()
        const nextRange = setNextRange(next)
        incrementPagTicker(pagMemoTicker + 1)
        enableAndDisableButtons(nextRange)
        setDisplayRange(nextRange)
    }

    return [ paginate, backDisabled, nextDisabled ]
}