import { makeStyles, useMediaQuery } from '@material-ui/core'
const nssr = {noSsr: true}


export const useIncomeHeaderStyles = props => {

    const { theme, textSize } = props
    
    const onlyTwoCells = useMediaQuery('(max-width: 390px)', nssr)



    const responsiveStyles = {
        ...(onlyTwoCells ? { width: "70px"} : {}),
        ...(textSize ? textSize : {})

    }

    const useStyles = makeStyles(({palette: p}) => {

        return ({
            headerCell: {
                color: p.primaryDark.main,
                ...responsiveStyles,
                fontWeight: "bold",
            },

        })
    })

    return useStyles(theme)
}



export const useEmptyCellStyles = (theme) => {


    const useStyles = makeStyles(theme => {

        return({
            emptyCell: {
                maxWidth: "36px",
                minWidth: "36px", 
                padding: "0px"
            }
        })
    })

    return useStyles(theme)
}