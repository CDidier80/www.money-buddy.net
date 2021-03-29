import { moneyBuddyTheme as mbt} from "../../modules/themeAndStyles"
import { makeStyles } from '@material-ui/core'

const { palette: p, lato, rowColor: _rowColor, offRowColor } = mbt

const baselineCellStyles = {
    fontFamily: "Roboto",
    textAlign: "right", 
    cursor: "pointer",
    outline: "none",
    color: "black",
    border: 'none',
    width: '100%'
}

const applyOppositeColor = color => {
    return color === _rowColor ? 
        p.secondary.main : 
        p.primary.main
}


// export const useFlowCellStyles = (rowColor) => {

//     const useStyles = makeStyles(theme => {

//         return({
//             cell: {
//                 backgroundColor: rowColor,
//                 fontSize: "18px"
//             },
//             input: { 
//                 backgroundColor: rowColor, 
//                 ...baselineCellStyles,
//                 fontSize: "18px",
//                 border: "0px",
//                 "&:focus": {
//                     outline: `1px dotted ${rowColor}`
//                 }
//             },
            
//             "@media (max-width: 1600px)":{
//                 cell:  { fontSize: "16px" },
//                 input: { fontSize: "16px" },
//             }, 
//             "@media (max-width: 1200px)":{
//                 cell:  { fontSize: "14px" },
//                 input: { fontSize: "14px" },
//             }, 
//             "@media (max-width: 725px)": {
//                 cell: {
//                     paddingLeft: 0,
//                     paddingRight: 0,
//                     fontSize: "12px"
//                 },
//                 input: { 
//                     paddingLeft: 0,
//                     paddingRight: 0,
//                     fontSize: "12px"
//                 },
//             },
//             "@media (max-width: 460px)":{
//                 cell: { fontSize: "10px" },
//                 input: { fontSize: "10px" },
//             },
//             "@media (max-width: 390px)":{
//                 input: { 
//                     backgroundColor: rowColor, 
//                     textAlign: "center",
//                     border: "0px",
//                 },
//             } 
//         })
//     })

//     return useStyles()
// }


export const useEmptyCellStyles = () => {

    const useStyles = makeStyles(theme => {

        return({
            emptyCell: {
                maxWidth: "36px",
                minWidth: "36px", 
                padding: "0px",
            },
            "@media (min-width: 1200px)":{
                emptyCell: {
                    maxWidth: "20px",
                    minWidth: "20px", 
                    width: "20px"
                },
            } 
        })
    })

    return useStyles()
}


export const useFlowNumberCellStyles = (rowColor) => {

    const useStyles = makeStyles(theme => {

        return({
            cell: {
                backgroundColor: rowColor,
                fontSize: "18px",
            },
            input: { 
                backgroundColor: rowColor, 
                ...baselineCellStyles,
                fontSize: "18px",
                border: "0px",
                "&:focus": {
                    outline: `1px dotted ${applyOppositeColor(rowColor)}`
                }
            },
            "@media (max-width: 1600px)":{
                cell:  { fontSize: "16px" },
                input: { fontSize: "16px" },
            }, 
            "@media (max-width: 1200px)":{
                cell:  { fontSize: "14px" },
                input: { fontSize: "14px" },
            }, 
            "@media (max-width: 725px)": {
                cell: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    fontSize: "12px"
                },
                input: { 
                    paddingLeft: 0,
                    paddingRight: 0,
                    fontSize: "12px"
                },
            },
            "@media (max-width: 460px)":{
                cell: { fontSize: "10px" },
                input: { fontSize: "10px" },
            },
            "@media (max-width: 390px)":{
                input: { 
                    backgroundColor: rowColor, 
                    textAlign: "center",
                    border: "0px",
                },
            } 
        })
    })

    return useStyles()
}


export const useFlowSourceCellStyles = rowColor => {

    const useStyles = makeStyles(theme => {

        return({
            cell:{                 
                backgroundColor: rowColor,
                fontSize: "18px"
            },
            input: { 
                backgroundColor: rowColor, 
                ...baselineCellStyles,
                fontSize: "18px",
                border: "0px",
                "&:focus": {
                    outline: `1px dotted ${applyOppositeColor(rowColor)}`
                }
            },
            "@media (max-width: 1600px)":{
                cell:  { fontSize: "16px" },
                input: { fontSize: "16px" },
            }, 
            "@media (max-width: 1200px)":{
                cell:  { fontSize: "14px" },
                input: { fontSize: "14px" },
            }, 
            "@media (max-width: 725px)": {
                cell: {
                    paddingLeft: 0,
                    paddingRight: 0,
                    fontSize: "12px"
                },
                input: { 
                    paddingLeft: 0,
                    paddingRight: 0,
                    fontSize: "12px"
                },
            },
            "@media (max-width: 460px)":{
                cell: { fontSize: "10px" },
                input: { fontSize: "10px" },
            },
            "@media (max-width: 390px)":{
                input: { 
                    backgroundColor: rowColor, 
                    textAlign: "center",
                    border: "0px",
                },
            } 
        })
    })

    return useStyles()
}
