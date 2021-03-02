import { moneyBuddyTheme } from "../../../../modules/themeAndStyles"
import { makeStyles } from '@material-ui/core/'


const { palette: p } = moneyBuddyTheme

export const useMoneyBuddyLinkStyles = makeStyles(theme => {
    return({
        titleLink: {
            textDecoration: "none",
            fontSize: "26px",
            display: "block",
            color: "white",
        },
        money: {
            color: p.secondary.main,
            marginRight: "2px",
            fontSize: "26px",
        }
    })
})