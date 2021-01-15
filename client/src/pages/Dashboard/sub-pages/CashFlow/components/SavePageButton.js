import React from 'react'
import { UpdateEntireCashflow } from "../../../../../Services/CashflowService"
import { useSnackbar, withSnackbar } from 'notistack';



const SavePageButton = (props) => {

    {/*  PROPS  */}

    const {
        cashflowId,
        setCashflowId,
    } = props.fromDashboard

    const {
        setNewInflows,
        newInflows,
        setFlowcategories,
        newFlowcategories,
        toggleChanges
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


    const sendCashflowToDatabase = async (payload) => {
        const newCashflow = await UpdateEntireCashflow(payload)
        const { cashflowId: c, inflows: i, flowcategories: fc } = newCashflow
        setCashflowId(c)
        setNewInflows(i)
        setFlowcategories(fc)
    }


    const saveCashflow = async (e) => {
        try {
            e.preventDefault()
            const payload = {
                cashflowId: cashflowId,
                inflows: newInflows,
                flowcategories: newFlowcategories,
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
