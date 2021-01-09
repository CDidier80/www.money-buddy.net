exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req) => {
        const show = true
        if (show){
            console.log(`Request arrived in UserController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    UserControllerErrorLog : (controllerFunction, error) => {
        const show = true
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: UserController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    },

    BudgetControllerLog : (controllerFunction, req) => {
        const show = true
        if (show){
            console.log(`Request arrived in BudgetController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    BudgetControllerErrorLog : (controllerFunction, error) => {
        const show = true
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: BudgetController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    },   
    
    IncomeControllerLog : (controllerFunction, req) => {
        const show = true
        if (show){
            console.log(`Request arrived in IncomeController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    IncomeControllerErrorLog : (controllerFunction, error) => {
        const show = true
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: IncomeController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    CategoryControllerLog : (controllerFunction, req) => {
        const show = true
        if (show){
            console.log(`Request arrived in CategoryController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    CategoryControllerErrorLog : (controllerFunction, error) => {
        const show = true
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: CategoryController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 

    ExpenseControllerLog : (controllerFunction, req) => {
        const show = true
        if (show){
            console.log(`Request arrived in ExpenseController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    ExpenseControllerErrorLog : (controllerFunction, error) => {
        const show = true
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: ExpenseController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    }, 


}

