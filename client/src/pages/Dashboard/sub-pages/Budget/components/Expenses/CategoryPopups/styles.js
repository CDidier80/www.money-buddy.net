import { makeStyles, withStyles, TextField } from '@material-ui/core'

export const useModalStyles = makeStyles( theme => {

    const { palette, lato } = theme
    const { primary, secondary } = palette

    return ({
        dialog: {
            minWidth: "280px",
            width: "33vw"
        },
        header: {
            padding: "20 20 0 20px",
            color: primary.main,
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            ...lato,
        },
        iconButtons: {
            paddingTop: 0,
            marginTop: 0,
        },
        buttonWrapper: {
            margin: "0 auto",
            textAlign: "center",
            justifyContent: "center"
        },
        button: {
            ...lato,
            fontSize: "13px",
            color: secondary.main,
            "&:hover" : {
                backgroundColor: "#06fbff4b"
            },
        },
        span: { }
    })
})


export const makeAddCategoryStyles = makeStyles(theme => {

    const { lato, palette } = theme
    const { primary, secondary } = palette

    return({
        dialog: {
            minWidth: "280px",
            width: "33vw"
        },
        header: {
            ...lato,
            fontSize: "20px",
            fontWeight: "700",
            color: primary.main,
            padding: "20 20 0 20px",
        },
        iconButtons: {
            marginTop: 0,
            paddingTop: 0
        },
        button: {
            ...lato,
            fontSize: "12px",
            fontWeight: "700",
        }
    })
})



export const StyledTextField = withStyles( theme => {
    
    const { lato, palette } = theme
    const { primary, secondary, secondaryDark, secondaryBright, primaryBright } = palette
    return ({
        root: {
            ...lato, 
            marginBottom: "20px", 
            padding: "0, 5px, 0, 5px", 
            '& label': {
                color: secondaryBright.main,
                fontSize: "15px"
            },
            '& label.Mui-focused': {
                color: secondaryBright.main,
            },
            '& error': {
                borderBottomColor: secondaryBright.main,
                
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: primary.main,            
                '& Mui-error': {
                    borderBottomColor: "red"
                }
            },
            '& .MuiInput-underline Mui-error:after': {
                borderBottomColor: 'green',
            },

        },
    })
})(TextField)
