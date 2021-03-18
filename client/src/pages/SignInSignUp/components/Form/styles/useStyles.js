import { makeStyles } from '@material-ui/core/'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { moneyBuddyTheme, latoTextStyle } from "../../../../../modules/themeAndStyles"
const { primary, secondary, secondaryDark } = moneyBuddyTheme.palette
const { shadow1 } = moneyBuddyTheme.boxShadows


export const useLoginFormStyles = () => {

    const medQuery = (style1, style2) => matches ? style1 : style2
    const matches = useMediaQuery('(max-height:730px)')


    return (makeStyles({

        formWrapper: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            top: 0, bottom: 0, right: 0, left: 0,
            animation: "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 500ms both",
            "-webkit-animation": "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 200ms both",
        },
        grid: {
            maxHeight: "614px",
            minWidth: "300px",
            maxWidth: "410px",
            ...latoTextStyle,
            height: '600px',
            width: '50%',
        },
        paperRoot: {
            borderRadius: "12px",
            ...latoTextStyle,
        },
        textfield: {
            "& .MuiFilledInput-root": {
                background: "rgb(black)"
            }
        },
        header: {
            color: "black",
            marginTop: "8px",
            ...latoTextStyle
        },
        paper: {
            backgroundColor: "rgba(255,255,255,.4)",
            margin: moneyBuddyTheme.spacing(8, 4),
            flexDirection: 'column',
            alignItems: 'center',
            ...latoTextStyle,
            display: 'flex',
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
            paddingTop: "5px",
            cursor: "Pointer",
            ...latoTextStyle,
            fontSize: "16px",
            marginTop: "5px",
            color: "black",
            width: "100%",
            transition: "scale .6s, color: .6s",
            "&:hover": {
                color: secondaryDark.main,
                transform: "scale(1.06, 1.06)"
            }
        },
        "@media (max-height: 710px)": {
            paper: {
                margin: "32px 32px 20px 32px"
            },
            grid: {
                height: "565px"
            }
        }
    }))()

}
