import { 
    Fade,
    IconButton,
    makeStyles
} from '@material-ui/core'
import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'



const DeleteIncomeIcon = (props) => {
    
    
    const { 
        tick,
        newIncomes,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
        updateBudget,
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
            color: "red",
            fontSize: "13px"
        },
    })

    const classes = useStyles()


    const handleDeleteIncome = (e) => {
        e.preventDefault()
        try {
            // console.log("newIncomes:", newIncomes)
            const incomeIndex = e.currentTarget.id
            let newIncomesCopy = [...newIncomes]
            newIncomesCopy.splice(incomeIndex, 1)
            // console.log('newIncomesCopy after splice: ', newIncomesCopy)
            setNewIncomes(newIncomesCopy)
            // this may not work for index 0
            setIncomingDeletion(true)
            // let ArrayOfHistoriesCopy = [...arrayOfHistories]
            // ArrayOfHistoriesCopy.pop()
            // updateArrayOfHistories(ArrayOfHistoriesCopy)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            updateBudget(tick + 1)
        } catch (error) {
            console.log(error)
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
