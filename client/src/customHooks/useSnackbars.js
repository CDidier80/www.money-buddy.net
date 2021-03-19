import {  useSnackbar  } from 'notistack'


export default function useSnackbars(){

    
    const { enqueueSnackbar } = useSnackbar()

    const errorVariant = {variant: 'Error'}
    const successVariant = { variant: 'Success', iconVariant: "Success" }


    const errorSnackbar = (variable) => {
        enqueueSnackbar(`Failed to Change ${variable}`, errorVariant)
    }

    const invalidSnackbar = (variable) => {
        enqueueSnackbar( `${variable} is invalid` , errorVariant)
    }
    
    
    const mismatch = (variableOne, variableTwo) => {
        enqueueSnackbar(`${variableOne} doesn't match ${variableTwo}`, errorVariant)
    }
    
    const updateSnackbar = (variable) => enqueueSnackbar(
        `Successfully Updated ${variable}`, successVariant
    ) 

    const disabledForGuestSnackbar = () => {
        enqueueSnackbar("This action is disabled on guest account")
        enqueueSnackbar("Sign up to enable all privileges")
    }

    const budgetSavedSnackbar = () => {
        enqueueSnackbar(`Budget Saved`, {
            variant: 'Success', 
            iconVariant: "Success"
        })
    }
    
    const failedBudgetSaveSnackbar = () => {
        enqueueSnackbar(`Failed to Save Changes`, {variant: 'Error'})
    }

    const snackbars = {
        failedBudgetSaveSnackbar,
        disabledForGuestSnackbar,
        budgetSavedSnackbar,
        invalidSnackbar,
        updateSnackbar,
        errorSnackbar,
        mismatch,
    }

    return snackbars
}