import { makeStyles } from "@material-ui/core"

export const makeSliderFlexboxStyles = makeStyles(theme => {

    const { gradients, palette, boxShadows } = theme
    const { primaryDark } = palette

    return({
        sliderFlexbox: {
            width: "100%,",
            padding: "1px",
            display: "flex",
            borderRadius: "8px",
            backgroundColor: primaryDark,
            boxShadow: boxShadows.shadow1,
            justifyContent: "space-between",
            backgroundImage: gradients.wrapper
        }
    })
})