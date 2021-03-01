import * as queryHooks from "./useIncomeQueries"
import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"
import { makeStyles } from '@material-ui/core'

const { palette: p, lato } = moneyBuddyTheme



export const useIncomeHeaderStyles = () => {

    const {
        Parser, 
        queriesObject,
        priorityStyles: ps, 
    } = queryHooks.useIncomeHeaderQueries()

    const {
        width,
        padding, 
        fontSize, 
        "&:last-child": lastCell, 
    } = ps

    const {maxWidth480px} = queriesObject

    const textAlignCenter = Parser.addStyleOnQuery(maxWidth480px, {textAlign: "center"})

    const useStyles = makeStyles(theme => {
    
        return ({
            headerCell: {
                color: p.primaryDark.main,
                fontWeight: "bold",
                ...textAlignCenter,
                ...lastCell,
                ...fontSize,
                ...padding,
                ...width,
            },
        })
    })

    return useStyles()
} 





export const useIncomeNumberCellStyles = () => {



}

export const useIncomeTableStyles = makeStyles(theme => {

    const { priorityStyles: ps, } = queryHooks.useIncomeTableQueries()
    const { overflowX, padding } = ps

    return ({
        accordionDetails: {
            paddingLeft: "15px", 
            paddingRight: "15px",
            ...overflowX,
            ...padding,
        },
        table: {
            minWidth: "270px",
            ...overflowX,
        },
        tableContainer: {
            maxWidth: "890px",
            margin: "auto",
            ...overflowX,
        },
    })
})
    
    
    



export const useEmptyCellStyles = () => {

    const smallerWidths = queryHooks.useEmptyCellQueries()

    const useStyles = makeStyles(theme => {
        return({
            emptyCell: {
                maxWidth: "36px",
                minWidth: "36px", 
                padding: "0px",
                ...smallerWidths,
            }
        })
    })

    return useStyles()
    
}


// const useIncomeHeaderStyles = makeStyles(theme => {


//     // const [{
//     //     maxWidth725px,
//     //     maxWidth480px,
//     //     maxWidth410px,
//     //     maxWidth390px,
//     // }, Parser] = useIncomeQueries(styleHookKey)

//     // const {
//     //     padding, 
//     //     fontSize, 
//     //     "&:last-child": lastCell
//     // } = Rules.incomeHeaderRules
    
//     // const fontRules = [
//     //     [maxWidth725px, fontSize.maxWidth725px],
//     //     [maxWidth390px, fontSize.maxWidth390px]
//     // ]

//     // const paddingRules = [
//     //     [maxWidth725px, padding.maxWidth725px],
//     //     [maxWidth480px, padding.maxWidth480px],
//     // ]


//     // const lastChildRules = [
//     //     [maxWidth480px, lastCell.maxWidth480px],
//     //     [maxWidth410px, lastCell.maxWidth410px],
//     // ]
    

//     // const [
//     //     fontStyle, 
//     //     paddingStyle, 
//     //     lastChildStyle,
//     // ] = Parser.getPriorityStyles([fontRules, paddingRules, lastChildRules])

//     const {priorityStyles: ps} = useIncomeQueries(styleHookKey)
//     const {padding, fontSize, "&:last-child": lastCell, width} = ps

//     return ({
//         headerCell: {
//             color: p.primaryDark.main,
//             fontWeight: "bold",
//             ...lastCell,
//             ...fontSize,
//             ...padding,
//             ...width,
//         },
//     })
// })