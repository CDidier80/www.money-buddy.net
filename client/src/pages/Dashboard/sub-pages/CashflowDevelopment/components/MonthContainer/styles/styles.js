import { makeStyles } from '@material-ui/core/styles'

export const makeMonthContainerStyles = makeStyles(theme => {

    const { boxShadows, palette, gradients } = theme

    return ({  
        monthContainer: {
            backgroundColor: palette.primaryDark.main,
            backgroundImage: gradients.wrapper,
            boxShadow: boxShadows.shadow2,
            margin: "0 4px 0 4px",
            borderRadius: "8px",
            overflow: "hidden",
            minWidth: "235px",
            maxWidth: "250px",
            padding: "8px",
            height: "0%",
        }
    })
})


/**
 * =============================================================
 *                       SUMMARY STYLES
 * =============================================================
*/

export const makeSummaryAccordionStyles = makeStyles(theme => {
    return ({  
        accordion: {
            marginBottom: "4px",
        }
    })
})


export const useSummaryDropdownStyles = makeStyles( theme => {

    const { lato, palette: p } = theme

    return ({  
        heading: {
            ...lato,
            margin: "0 auto",
            fontSize: "18px",
            fontWeight: "700",
            paddingLeft: "27px",
            color: p.primaryDark.main,
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color: p.primaryDark.main,
            fontSize: "18px",
            paddingLeft: "0"
        }
    })
})


export const makeSummaryTableStyles = makeStyles(theme => {
    return ({  
        details :{
            padding: "0",
            margin: "auto",
            textAlign: "center",
        },
        tableContainter :{
            width: "100%",
            padding: "5px",
            margin: "auto",
        },
        row: {
            maxWidth: "95%"
        }
    })
})


export const makeFlowRowsStyles = makeStyles(({palette: p}) => {
    return ({  
        tableContainter: {
            margin: "auto",
            width: "100%",
            padding: "5px"
        },
        row: {
            backgroundColor: "rgb(180, 255, 255)",
            borderRadius: "5px"
        },
        inflowCell : {
            borderBottom: "none",
            color: "white",
            backgroundColor: p.primaryDark.main
        },
        outflowCell : {
            backgroundColor: p.secondaryDark.main,
            color: "white"
        },
        netCashflowCell: {
            backgroundColor: p.net.main,
            color: "white",
            borderBottom: "none"
        }
    })
})


export const makeCashRowStyles = makeStyles(({palette: p}) => {
    return ({  
        cashTable: {
            marginTop: "14px"
        },
        cell : {
            backgroundColor: p.primaryDark.transparent[9],
            borderBottom: "2px",
            color: "white",
        }
    })
})

 

/**
 * =============================================================
 *                       INFLOWS STYLES
 * =============================================================
*/


export const useInflowsAccordionStyles = makeStyles(theme => {
    return ({  
        accordion: {
            marginTop: "5px",
            padding: "3px"
        }
    })
})


export const useInflowsDropdownStyles = makeStyles(({lato, palette: p}) => {
    return ({  
        heading: {
            textShadow:  `0 0 1px lightgray`,
            color: p.primaryDark.main,
            paddingLeft: "27px",
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "18px",
            ...lato,
        },
        expandMoreIcon : {
            color: p.primaryDark.main,
            fontSize: "18px",
            paddingLeft: "0"
        }
    })
})


export const useInflowsTableStyles = makeStyles(theme => {
    return ({  
        tableBody: {
            overflow: "hidden"
        },
        tableContainer: {
            margin: "auto",
            padding: '4px'
        },
    })
})


export const useInflowHeadersStyles = makeStyles(({lato, palette: p}) => {
    return ({  
        row: {
            width: "100%"
        },
        columnHeader: {
            color: p.primaryDark.main,
            fontWeight: "bold",
            fontSize: "14px",
            padding: "8px",
            ...lato,
        },
        emptyCell: {
            maxWidth: "20px",
            minWidth: "20px", 
            padding: "0px"
        }
    })
})



/**
 * =============================================================
 *                       OUTFLOWS STYLES
 * =============================================================
*/

export const useOutflowsAccordionStyles = makeStyles(theme => {
    return ({  
        root: {
            padding: "3px 3px 6px 3px",
            marginTop: "5px",
        }
    })
})


export const useOutflowsDropdownStyles = makeStyles(({lato, palette: p}) => {
    return ({  
        heading: {
            textShadow: `0 0 1px lightgray`,
            color: p.secondaryDark.main,
            paddingLeft: "27px",
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "18px",
            ...lato,
        },
        expandMoreIcon : {
            color: p.secondaryDark.main,
            fontSize: "18px",
            paddingLeft: "0"
        }
    })
})



export const useFlowcategoryAccordionStyles = makeStyles(theme => {
    return ({  
        accordionDetails: {
            padding: "10px 3px 0 3px",
        },
        categoryWrapper: {
            width: "100%",
            margin: "0 auto",

        },
        accordion: {
            width: "100%",
        },
    })
})


export const useFlowcategoryDropdownStyles = makeStyles(({lato, palette: p}) => {
    return ({  
        flexWrapper: {
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
        },
        flowcategoryHeader: {
            color: p.secondaryDark.main,
            fontWeight: "500",
            fontSize: "14px",
            ...lato,
        },
        expandMoreIcon : {
            color: p.secondaryDark.main,
            fontSize: "18px",
            paddingLeft: "0"
        }
    })
})


export const useTableWrapperStyles = makeStyles(theme => {
    return ({  
        tableBody: { overflow: "hidden" },
        tableContainer: {
            boxShadow: "1px -1px 1px rgb(0, 0, 0, 0.1)",
            padding: '4px',
            margin: "auto",
        },
    })
})


export const useOutflowHeadersStyles = makeStyles(({lato, palette: p}) => {
    return ({  
        columnHeader: {
            color: p.secondaryDark.main,
            fontWeight: "700",
            fontSize: "14px",
            padding: "8px",
        },
        row: { width: "100%" },
        emptyCell: {
            maxWidth: "20px",
            minWidth: "20px", 
            padding: "0px"
        }
    })
})


export const useOutflowRowStyles = (theme) => {

    const rowStyles = makeStyles(theme => {
        return ({  
            cell : {
                padding: "8px",
                color: "black",
                fontWeight: 500,
                fontSize: "12px",
                overflowWrap: "break-word",
            },
            
        })
    })

    return rowStyles(theme)
}