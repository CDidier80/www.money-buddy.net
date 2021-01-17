import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { 
    IconButton,
    Fade,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    deleteIcon: {
        color: "red",
        fontSize: "13px"
    },
})


const DeleteInflowIcon = (props) => {

    
    {/* ------------ Deconstruct Props -----------*/}
    const { 
        toggleChanges,
        userMadeChanges,
        updateCashflow,
        tick
    } = props.fromCashflow

    const {
        monthlyInflows,
        setMonthlyInflows,
    } = props.fromMonthContainer

    const {
        rowIndex,
        setIncomingDeletion,
    } = props.fromInflowTable



    {/* ------------ Functions -----------*/}
    const classes = useStyles()


    const handleDeleteIncome = (e) => {
        e.preventDefault()
        try {
            const inflowIndex = e.currentTarget.id
            let monthlyInflowsCopy = [...monthlyInflows]
            monthlyInflowsCopy.splice(inflowIndex, 1)
            setMonthlyInflows(monthlyInflowsCopy)
            setIncomingDeletion(true)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            updateCashflow(tick + 1)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fade in={true}>
            <IconButton
                className={classes.iconButton}
                onClick={(e) => handleDeleteIncome(e)}
                id={rowIndex}
            >
                <HighlightOffIcon 
                    className={classes.deleteIcon} 
                    fontSize="small"
                />
            </IconButton>
        </Fade>
    )
}

export default DeleteInflowIcon
