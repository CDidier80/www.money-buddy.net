import { makeStyles, } from '@material-ui/core/';

const formFont = {
    fontFamily: "Lato,sans-serif",
    textRendering: "optimizeLegibility!important",
    WebkitFontSmoothing: "antialiased!important"
}

const useStyles = makeStyles((theme) => ({
root: {
    paddingTop: "10vh",
    maxHeight: "830px",
    minWidth: "300px",
    maxWidth: "410px",
    margin: "0 auto",
    height: '70%',
    width: '50%',
    ...formFont,
},
header: {
    color: theme.palette.primaryDark.main,
    backgroundColor: "white",
    fontSize: "18px",
    ...formFont
},
paper: {
    boxShadow: `
        0px 3px 1px -2px rgba(0,0,0,0.2), 
        0px 2px 2px 0px  rgba(0,0,0,0.14), 
        0px 1px 5px 0px rgba(0,0,0,0.12);`,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: "7px",
    minWidth: "352px",
    maxWidth: "600px",
    display: 'flex',
    padding: "30px",
    ...formFont
},
form: {
    backgroundColor: "rgba(255,255,255)",
    marginTop: theme.spacing(1),
    marginBottom: "20px",
    width: '100%', // Fix IE 11 issue.
    ...formFont
},
}))

export default useStyles