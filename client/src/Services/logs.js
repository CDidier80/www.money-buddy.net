export const ServiceLoggers = {
    UserServiceLog : (serviceFunction, body, params) => {
        const show = false
        if (show) {
            console.log(`Request arrived in UserService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    UserServiceErrorLog : (serviceFunction, error) => {
        const show = false
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: UserService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },
    BudgetServiceLog : (serviceFunction, body, params) => {
        const show = false
        if (show) {
            console.log(`Request arrived in BudgetService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    BudgetServiceErrorLog : (serviceFunction, error) => {
        const show = false
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: BudgetService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },

    IncomeServiceLog : (serviceFunction, body, params) => {
        const show = true
        if (show) {
            console.log(`Request arrived in IncomeService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    IncomeServiceErrorLog : (serviceFunction, error) => {
        const show = true
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: IncomeService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },

    CategoryServiceLog : (serviceFunction, body, params) => {
        const show = true
        if (show) {
            console.log(`Request arrived in CategoryService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },

    CategoryServiceErrorLog : (serviceFunction, error) => {
        const show = true
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: CategoryService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },

    ExpenseServiceLog : (serviceFunction, body, params) => {
        const show = true
        if (show) {
            console.log(`Request arrived in ExpenseService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    
    ExpenseServiceErrorLog : (serviceFunction, error) => {
        const show = true
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: ExpenseService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },

    CashflowServiceLog : (serviceFunction, body, params) => {
        const show = false
        if (show) {
            console.log(`Request arrived in CashflowService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    CashflowServiceErrorLog : (serviceFunction, error) => {
        const show = false
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: CashflowService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },





}

