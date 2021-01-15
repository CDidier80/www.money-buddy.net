import React from 'react'
import { UpdateEntireBudget} from "../../../../../../../Services/BudgetService"
import { useSnackbar, withSnackbar } from 'notistack';


const SavePageButton = (props) => {

    {/*  PROPS  */}

    const {
        setIncomes,
        setCategories,

        budgetId,
        setBudgetId
    } = props.budgetHooks

    const {
        newIncomes,
        newCategories,
        toggleChanges
    } = props.fromBudget


    {/*  FUNCTIONS  */}

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()


    const budgetSavedSnackbar = () => {
        enqueueSnackbar(`Budget Saved`, {
            variant: 'Success', 
            iconVariant: "Success"
        })
    }
    

    const failedBudgetSaveSnackbar = () => {
        enqueueSnackbar(`Failed to Save Changes`, {variant: 'Error'})
    }



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
            await sendBudgetToDB(payload)
            toggleChanges(false)
            budgetSavedSnackbar()
        } catch (error) {
            failedBudgetSaveSnackbar()
            console.log("budget update failed: ", error)
        }
    }

    return (
        <button 
            className="save-page-button"
            onClick={(e) => saveBudget(e)}
        >
            Save
        </button>
    )
}

export default withSnackbar(SavePageButton)
