import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"
import { makeStyles } from '@material-ui/core'

const { palette: p, lato } = moneyBuddyTheme

export const useIncomeHeaderStyles = () => {

    const useStyles = makeStyles(theme => {
    
        return ({
            headerCell: {
                color: p.primaryDark.main,
                fontWeight: "bold",
                fontSize: "18px"
            },
            "@media (max-width: 1600px)":{
                headerCell: { fontSize: "16px", }
            }, 
            "@media (max-width: 1200px)":{
                headerCell: { fontSize: "14px", }
            }, 
            "@media (max-width: 725px)":{
                headerCell: {
                    padding: "6px 5px 6px 16px",
                    fontSize: "11px",
                }
            }, 
            "@media (max-width: 480px)":{
                headerCell: {
                    "&:last-child": {
                        textAlign: "center",
                        paddingRight: 0,
                        width: "75px",
                    },
                    padding: "6px 0px 6px 0px",
                    paddingRight: "0",
                    textAlign: "center",
                }
            }, 
            "@media (max-width: 410px)":{
                headerCell: {
                    "&:last-child": {
                        textAlign: "center",
                        paddingRight: 0,
                        width: "55px",
                    }
                }
            }, 
            "@media (max-width: 390px)":{
                headerCell: {
                    fontSize: "12px",
                    width: "70px"
                }
            }, 
        })
    })

    return useStyles()
} 


export const useIncomeTableStyles = makeStyles(theme => {
    return ({
        accordionDetails: {
            paddingLeft: "15px", 
            paddingRight: "15px",
        },
        table: { minWidth: "270px", },
        tableContainer: { margin: "auto", },
        "@media (max-width: 725px)":{
            accordionDetails: {
                paddingRight: "15px",
                paddingLeft: "15px", 
                paddingRight: "8px",
                overflowX: "hidden",
                paddingLeft: "8px", 
            },
            table: {
                overflowX: "hidden",
                minWidth: "270px",
            },
            tableContainer: {
                overflowX: "hidden",
                maxWidth: "890px",
                margin: "auto",
            },
        },   
        "@media (min-width: 1200px)":{
            accordionDetails: {
                paddingRight: "25px",
                paddingLeft: "25px", 
            },
        } 
    })
})
    

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


export const useIncomeNumberCellStyles = (rowColor) => {
    const useStyles = makeStyles(theme => {
        return({
            cell: {
                backgroundColor: rowColor,
                fontSize: "18px"
            },
            input: { 
                backgroundColor: rowColor, 
                fontSize: "18px",
                border: "0px",
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

export const useIncomeSourceCellStyles = (rowColor) => {
    const useStyles = makeStyles(theme => {
        return({
            cell: {
                backgroundColor: rowColor,
                fontSize: "18px"
            },
            input: { 
                backgroundColor: rowColor, 
                fontSize: "18px",
                border: "0px",
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
