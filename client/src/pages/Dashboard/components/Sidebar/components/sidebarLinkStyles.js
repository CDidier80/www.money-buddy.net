import { makeStyles } from '@material-ui/core/'

export const useSidebarLinkStyles = (theme, hoverColor, lastClicked) => {
    
    const useStyles = makeStyles(({palette: p}) => {

        return({
            listItem: {
                position: "relative",
                display: "block",
                float: "none",
                padding: 0,
            },
            
            listLink: {
                justifyContent: "flex-start",
                transition: "all 0.5s ease",
                textDecoration: "none",
                alignItems: "center",
                whiteSpace: "nowrap",
                paddingLeft: "18px",
                lineHeight: "42px",
                textShadow: "none",
                overflow: "hidden",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                height: "42px",
                color: lastClicked ? p[hoverColor].main : "#fff",
                "&:hover": {
                    color: p[hoverColor].main
                }
            }
        })

    })

    return useStyles(theme)
}