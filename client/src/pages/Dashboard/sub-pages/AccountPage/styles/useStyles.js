import { makeStyles, } from '@material-ui/core/';

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
    color: theme.palette.primaryDark.main,
    backgroundColor: "white",
    fontSize: "18px",
    ...formFont
},
paper: {
    minWidth: "352px",
    maxWidth: "600px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,1)",
    padding: "30px",
    borderRadius: "7px",
    boxShadow: `
        0px 3px 1px -2px rgba(0,0,0,0.2), 
        0px 2px 2px 0px  rgba(0,0,0,0.14), 
        0px 1px 5px 0px rgba(0,0,0,0.12);`,
    ...formFont
},
form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: "rgba(255,255,255)",
    marginBottom: "20px",
    ...formFont
},
}))

export default useStyles