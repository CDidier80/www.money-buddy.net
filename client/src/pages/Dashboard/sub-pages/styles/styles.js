import { makeStyles } from '@material-ui/core/'

export const useDashboardStyles = makeStyles(theme => {

    const { gradients, lato } = theme

    const dashboardStyles = {
        dashboard: {
            ...lato,
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "rgb(0, 58, 59)",
            backgroundImage: gradients.wrapper,
        }
    }

    return dashboardStyles

})