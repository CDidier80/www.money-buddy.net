import React from 'react'
import { UpdateEntireCashflow } from "../../../../../Services/CashflowService"
import { useSnackbar, withSnackbar } from 'notistack';



const SavePageButton = (props) => {

    {/*  PROPS  */}

    const {
        cashflowId,
        setCashflowId,
        setInflows,
        setCashflowCategories,
    } = props.fromDashboard

    const {

    } = props.fromCashflow


    {/*  FUNCTIONS  */}

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()


    const cashflowSavedSnackbar = () => {
        enqueueSnackbar(`Cashflow Saved`, {
            variant: 'Success', 
            iconVariant: "Success"
        })
    }
    

    const failCashflowSaveSnackbar = () => {
        enqueueSnackbar(`Failed to Save Changes`, {variant: 'Error'})
    }


    const sendCashflowToDatabase = async (e) => {
        e.preventDefault()
        const newCashflow = await UpdateEntireCashflow(payload)
        const { cashflowId: c, inflows: i, categories: c } = newCashflow
        setCashflowId(c)
        setInflows(i)
        setCashflowCategories(c)
    }


    const saveCashflow = async (e) => {
        try {
            e.preventDefault()
            const payload = {
                cashflowId: cashflowId,
                inflows: newInflows,
                categories: newCategories,
            }
            await sendCashflowToDatabase(payload)
            toggleChanges(false)
            cashflowSavedSnackbar()
        } catch (error) {
            failCashflowSaveSnackbar()
            console.log("cashflow update failed: ", error)
        }
    }

    return (
        <button 
            className="save-page-button"
            onClick={(e) => saveCashflow(e)}
        >
            Save
        </button>
    )
}

export default withSnackbar(SavePageButton)
