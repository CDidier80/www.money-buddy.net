import { makeStyles } from '@material-ui/core/'

export const useDropdownStyles = (theme, expanded) => {

    const useStyles = makeStyles(({palette}) => {

        const { main } = palette.primaryDark

        return ({
            summary: expanded ? 
            {
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%",
            } : 
            {
                transform: "translate(-50%, -50%)",
                position: "relative",
                top: "7.5vh",
                left: "50%",
            },
            heading: {
                ...theme.lato,
                fontWeight: "700",
                margin: "0 auto",
                fontSize: "30px",
                color: main,
                textShadow: `
                    0 0 1px lightgray;
                `
            },
            expandMoreIcon : {
                color: main,
                paddingTop: "9px"
            }
        })
    })

    return useStyles(theme)
}