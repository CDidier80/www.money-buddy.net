import { ButtonGroup, makeStyles } from '@material-ui/core'
import MonthlyButton from "./MonthlyButton"
import AnnualButton from "./AnnualButton"
import React from 'react'


const ButtonGroupToggler = (props) => {

    const useStyles = makeStyles({
        buttonGroup: {
            margin: "13px auto 0 auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            height: "30px",
            flexGrow: "1",
            width: "80%",
        },
    })

    const classes = useStyles()

    return (
        <ButtonGroup 
            variant="text" 
            color="primary" 
            className={classes.buttonGroup} 
            aria-label="text primary button group"
        >
            <MonthlyButton {...props} />
            <AnnualButton  {...props} />
        </ButtonGroup>
    )
}

export default ButtonGroupToggler
