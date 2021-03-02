
export const incomeHeaderRules = {
    "&:last-child": {
        maxWidth480px: {
            "&:last-child": {
                textAlign: "center",
                paddingRight: 0,
                width: "75px",
            }
        },
        maxWidth410px: {
            "&:last-child": {
                textAlign: "center",
                paddingRight: 0,
                width: "55px",
            }
        }
    },
    padding: {
        maxWidth725px: { padding: "6px 5px 6px 16px" },
        maxWidth480px: {
            padding: "6px 0px 6px 0px", 
            // cancels mui paddingRight override
            paddingRight: "0"
        }
    },
    fontSize: {
        maxWidth725px: { fontSize: "11px" },
        maxWidth390px: { fontSize: "12px" }
    },
    width: {
        maxWidth390px:{ width: "70px" }
    },
}


export const emptyCellRules = {
    maxWidth450px: {
        maxWidth: "20px",
        minWidth: "20px", 
        width: "20px"
    }
}



export const incomeTableRules = {
    padding: {
        maxWidth725px: {paddingLeft: "8px", paddingRight: "8px"}
    },
    overflowX: {
        maxWidth725px: {overflowX: "hidden"}
    },

}