import { makeStyles } from '@material-ui/core/'
import { Link } from 'react-router-dom'
import React from 'react'


const LandingPageLink = (props) => {

    const useStyles = makeStyles(theme => {
        const { main } = theme.palette.secondary

        const titleStyles = {
            titleLink: {
                display: "block",
                color: "white",
                textDecoration: "none",
                fontSize: "26px",
            },
            money: {
                color: main,
                fontSize: "24px",
            }
        }

        return titleStyles
    })

    const classes = useStyles(props.theme)

    return (
        <Link to="/" className={classes.titleLink}>
            <span className={classes.money}>Money</span>
            Buddy
        </Link> 
    )   
    
}



export default LandingPageLink
