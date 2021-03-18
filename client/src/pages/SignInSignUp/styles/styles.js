import { makeStyles } from '@material-ui/core/'
import { latoTextStyle } from '../../../modules/themeAndStyles'

const makeLandingStyles = (theme) => {
    const { primary, secondary } = theme.palette

    return makeStyles({
        signInSignUpPage: {
            width: "100%",
            ...latoTextStyle,
            minHeight: "100vh",
            backgroundImage: `linear-gradient(0deg, ${primary.main}, ${secondary.main})`
        },

        formWrapper: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center", 
            top: 0, bottom: 0, right: 0, left: 0,
            webkitAnimation: "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 200ms both",
            animation: "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 500ms both",
        },

    })

}

export default makeLandingStyles