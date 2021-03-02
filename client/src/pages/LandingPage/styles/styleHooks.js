import { makeStyles } from '@material-ui/core/styles'

export const useLandingPageStyles = (theme, props) => {

    const useStyles = makeStyles(({palette:p}) => {

        return {
            landingPage: {
                backgroundImage: `linear-gradient(45deg, ${p.primary.main} 20%, ${p.secondary.main})`,
                '-webkit-font-smoothing': `antialiased!important`,
                textRendering: `optimizeLegibility!important`,
                'overflow-x': "hidden",
                lineHeight: 1.5,
                fontWeight: 400,
                height: `100vh`,
                width: `100%`,
            }
        }

    })

    return useStyles(theme)
}