import {  makeStyles, useMediaQuery } from '@material-ui/core'


export const useDialogWrapperStyles = (theme => {

    const smallStyle = useMediaQuery("(max-width: 400px)", {noSsr: true})
    const style = smallStyle ? {fontSize: "12px", top: "30vh"} : {}

    const useStyles = makeStyles({
        dialog: {
            minWidth: "200px",
            backgroundColor: "white",
            ...style
        },
    })

    return useStyles(theme)
})

export const usePopupHeaderStyles = makeStyles(({lato, palette: p}) => {
    return ({
        header: {
            color: p.primaryDark.main,
            padding: "20 20 0 20px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            ...lato,
        }
    })
})


export const useButtonWrapperFonts = makeStyles(theme => {
    return ({
        buttonWrapper: {
            margin: "0 auto",
            textAlign: "center",
            justifyContent: "center"
        },
    })
})