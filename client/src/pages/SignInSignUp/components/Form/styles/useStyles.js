// import { makeStyles } from '@material-ui/core/'
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { moneyBuddyTheme, latoTextStyle } from "../../../../../modules/themeAndStyles"
const { primary, secondary, secondaryDark } = moneyBuddyTheme.palette
const { shadow1 } = moneyBuddyTheme.boxShadows

export const staticStyles = {

    header: {
        color: "black",
        marginTop: "8px",
        ...latoTextStyle
    },
    paperRoot: {
        borderRadius: "12px",
        ...latoTextStyle
    },
    paper: {
        backgroundColor: "rgba(255,255,255,.4)",
        margin: moneyBuddyTheme.spacing(8, 4),
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        ...latoTextStyle
    },
    avatar: {
        boxShadow: shadow1,
        margin: moneyBuddyTheme.spacing(1),
        background: `linear-gradient(
            90deg, 
            ${primary.main}, 
            ${secondary.main})`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: moneyBuddyTheme.spacing(1),
        backgroundColor: "rgba(255,255,255)",
        ...latoTextStyle
    },
    rememberMe: {
        color: "black",
        ...latoTextStyle
    },
    prompt: {
        textAlign: "center",
        fontWeight: "300",
        fontSize: "16px",
        paddingTop: "5px",
        cursor: "Pointer",
        ...latoTextStyle,
        width: "100%",
        marginTop: "5px",
        color: "black",
        transition: "scale .6s, color: .6s",
        "&:hover": {
            color: secondaryDark.main,
            transform: "scale(1.06, 1.06)"
        }
    }
}

