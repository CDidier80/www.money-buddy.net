import { makeStyles } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'




export const useFabStyles = ({theme, displayRange}) => {

    const { gradient1 } = theme.gradients

    const disabled = {
        backgroundColor: "#c5c5c5c4",
    } 
    
    const enabled = {
        backgroundImage: gradient1,
    }
    
    const checkDisabledStyle = range => range[0] === displayRange[0] ? disabled : enabled
    
    const [backStyle, nextStyle] = [
        checkDisabledStyle([0,1,2]), 
        checkDisabledStyle([9,10,11])
    ]

    const useStyles = makeStyles(theme => ({
        svg: {fontSize: "17px"},
        fab: {
            color: theme.palette.common.white,
            backgroundColor: cyan[100],
            maxHeight: "30px",
            maxWidth: "30px",
            minHeight: "0", 
        },
        back: {
            ...backStyle,
            marginRight: "18px"
        },
        next: { ...nextStyle },
    }))

    return useStyles(theme)
}
