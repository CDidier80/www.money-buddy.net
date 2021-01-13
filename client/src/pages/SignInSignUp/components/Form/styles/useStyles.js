// import { makeStyles } from '@material-ui/core/'
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from "./theme"



export const formFont = {
    fontFamily: "Lato,sans-serif",
    textRendering: "optimizeLegibility!important",
    WebkitFontSmoothing: "antialiased!important"
}

export const staticStyles = {

    header: {
        color: "black",
        ...formFont
    },
    paperRoot: {
        borderRadius: "12px",
        ...formFont
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,.4)",
        ...formFont
    },
    avatar: {
        margin: theme.spacing(1),
        background: "linear-gradient(90deg, #22c1c3, #fdbb2d)",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        backgroundColor: "rgba(255,255,255)",
        ...formFont
    },
    rememberMe: {
        color: "black",
        ...formFont
    },
    prompt: {
        width: "100%",
        textAlign: "center",
        fontWeight: "300",
        fontSize: "14px",
        paddingTop: "5px",
        cursor: "Pointer",
        ...formFont
    }
}

