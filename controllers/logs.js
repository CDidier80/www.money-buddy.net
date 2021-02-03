exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in UserController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    UserControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: UserController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    },

    BudgetControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in BudgetController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    BudgetControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: BudgetController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    },   
    
    IncomeControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in IncomeController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    IncomeControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: IncomeController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    CategoryControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in CategoryController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    CategoryControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: CategoryController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    ExpenseControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in ExpenseController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    ExpenseControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: ExpenseController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    CashflowControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in CashflowController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    CashflowControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: CashflowController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    MonthControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in MonthController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    MonthControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: MonthController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    InflowControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in InflowController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    InflowControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: InflowController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    FlowcategoryControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in FlowcategoryController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    FlowcategoryControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: FlowcategoryController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    OutflowControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in OutflowController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    OutflowControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: OutflowController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 


}

