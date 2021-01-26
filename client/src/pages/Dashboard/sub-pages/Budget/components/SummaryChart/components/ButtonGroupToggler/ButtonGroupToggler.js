import React from 'react'
import MonthlyButton from "../buttons/MonthlyButton"
import AnnualButton from "../buttons/AnnualButton"
import { 
    ButtonGroup, 
    makeStyles 
} from '@material-ui/core'


const ButtonGroupToggler = (props) => {

    const useStyles = makeStyles({
        buttonGroup: {
            height: "30px",
            width: "80%",
            display: "flex",
            margin: "10px auto 0 auto",
            textAlign: "center",
            flexGrow: "1",
            justifyContent: "center",
            alignItems: "center"
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
