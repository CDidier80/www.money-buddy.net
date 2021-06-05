import { Service, Body } from "./types"

type ServiceLogCallback = (callback: Service, body: Body, params: string ) => void
type ErrorCallback = (callback: Service, error: string ) => void
type Callbacks = ServiceLogCallback | ErrorCallback

interface LoggerTypes {
    [callback: string] : Callbacks
} 

export const ServiceLoggers: LoggerTypes = {
    UserApiLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in UserApi.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    UserApiErrorLog : (serviceFunction, error) => {
        const show = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: UserApi.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    BudgetApiLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in BudgetService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    BudgetServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: BudgetService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
         
    },

    IncomeApiLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in IncomeApi.ts => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    IncomeApiErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: IncomeApi.ts -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    CategoryServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in CategoryService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    CategoryServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: CategoryService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    ExpenseApiLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in ExpenseApi.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },
    
    ExpenseApiErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: ExpenseApi.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    CashflowApiLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in CashflowApi.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    CashflowApiErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: CashflowApi.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },
}

