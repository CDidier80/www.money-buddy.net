import { makeStyles } from '@material-ui/core';

export const useIncomeHeaderStyles = makeStyles(theme => {

    const { primaryDark: pd } = theme.palette

    return ({
        columnHeader: {
            color: pd.main,
            fontWeight: "bold",
        },
        emptyCell: {
            maxWidth: "36px",
            minWidth: "36px", 
            padding: "0px"
        }
    })
})