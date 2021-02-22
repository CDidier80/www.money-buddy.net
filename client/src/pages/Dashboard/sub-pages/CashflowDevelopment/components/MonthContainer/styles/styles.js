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