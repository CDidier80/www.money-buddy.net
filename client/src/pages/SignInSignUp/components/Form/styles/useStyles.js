import { makeStyles } from '@material-ui/core/'


const formFont = {
    fontFamily: "Lato,sans-serif",
    textRendering: "optimizeLegibility!important",
    WebkitFontSmoothing: "antialiased!important"
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '70%',
        maxHeight: "830px",
        width: '50%',
        minWidth: "300px",
        maxWidth: "410px",
        margin: "0 auto",
        paddingTop: "10vh",
        ...formFont,
    },
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
}))

export default useStyles