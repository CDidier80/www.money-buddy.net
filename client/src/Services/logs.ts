import { Service, Body } from "./types"

type ServiceLogCallback = (callback: Service, body: Body, params: string ) => void
type ErrorCallback = (callback: Service, error: string ) => void
type Callbacks = ServiceLogCallback | ErrorCallback

interface LoggerTypes {
    [callback: string] : Callbacks
} 

export const ServiceLoggers: LoggerTypes = {
    UserServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in UserService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    UserServiceErrorLog : (serviceFunction, error) => {
        const show = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: UserService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    BudgetServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in BudgetService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    BudgetServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: BudgetService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
         
    },

    IncomeServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in IncomeService.ts => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    IncomeServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: IncomeService.ts -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    CategoryServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in CategoryService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    CategoryServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: CategoryService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    ExpenseServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in ExpenseService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },
    
    ExpenseServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: ExpenseService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
    },

    CashflowServiceLog : (serviceFunction, body, params) => {
        const show: boolean = false
        show && console.log(`Request arrived in CashflowService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
    },

    CashflowServiceErrorLog : (serviceFunction, error) => {
        const show: boolean = false
        show && console.log(`TRY{}CATCH{} ERROR --> FILE: CashflowService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)

    },


}

