import { 
    Fade,
    IconButton,
    makeStyles
} from '@material-ui/core'
import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'



const DeleteIncomeIcon = props => {
    
    
    const { 
        tick,
        newIncomes,
        updateBudget,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
    } = props.fromBudget
    
    const {
        arrayIndex,
        setIncomingDeletion,
    } = props.fromIncomeTable

const { smallerIcons } = props

    const smallerWidths = smallerIcons ? {paddingRight: 0, maxWidth: "25px"} : {}

    const useStyles = makeStyles({
        iconButton: {
            marginRight: smallerIcons ? 0 : "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            },
            ...smallerWidths
        },
        deleteIcon: {
            fontSize: "13px",
            color: "red",
        },
    })

    const classes = useStyles()


    const handleDeleteIncome = (e) => {
        e.preventDefault()
        try {
            const incomeIndex = e.currentTarget.id
            let newIncomesCopy = [...newIncomes]
            newIncomesCopy.splice(incomeIndex, 1)
            setNewIncomes(newIncomesCopy)
            setIncomingDeletion(true)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            updateBudget(tick + 1)
        } catch (error) {
            throw error
        }
    }

    return (
        <Fade in={true}>
            <IconButton
                className={classes.iconButton}
                onClick={(e) => handleDeleteIncome(e)}
                id={arrayIndex}
            >
                <HighlightOffIcon 
                    className={classes.deleteIcon} 
                    fontSize="small"
                />
            </IconButton>
        </Fade>
    )
}

export default DeleteIncomeIcon
