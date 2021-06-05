import React from 'react'
import { useSnackbar, withSnackbar } from 'notistack'
import { UpdateEntireBudget} from "../../../../../../../api_services/budget-api-service.ts"
import ThemedButton from "../../../../../../../TopLevelComponents/ThemedButton"
import useSnackbars from '../../../../../../../custom_hooks/useSnackbars'


const SavePageButton = (props) => {

    /*  PROPS  */

    const {
        budgetId,
        setIncomes,
        setBudgetId,
        setCategories,
    } = props.budgetHooks

    const {
        newIncomes,
        newCategories,
        toggleChanges
    } = props.fromBudget


    const {
        budgetSavedSnackbar, 
        failedBudgetSaveSnackbar 
    } = useSnackbars()



    /*  snackbars  */

    const sendBudgetToDB = async (payload) => {
        const newBudget = await UpdateEntireBudget(payload)
        const { budgetId: b, incomes: i, categories: c } = newBudget
        setBudgetId(b)
        setIncomes(i)
        setCategories(c)
    }


    const saveBudget = async (e) => {
        try {
            e.preventDefault()
            const payload = {
                budgetId: budgetId,
                incomes: newIncomes,
                categories: newCategories,
            }
            toggleChanges(false)
            await sendBudgetToDB(payload)
            budgetSavedSnackbar()
        } catch (error) {
            failedBudgetSaveSnackbar()
        }
    }

    const overrides = {
        width: "100px",
        height: "46px",
        justifySelf: "flex-end",
        padding: "8px 8px 8px 8px",
        transition: "background-image 3s ease",
        WebkitAnimation: "scale-in-ver-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        animation: "scale-in-ver-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "&:hover": {
            
        }
    }

    return (
        <ThemedButton 
            className="save-page-button"
            onClick={(e) => saveBudget(e)}
            overrides={overrides}
        >
            Save
        </ThemedButton>
    )
}

export default withSnackbar(SavePageButton)
