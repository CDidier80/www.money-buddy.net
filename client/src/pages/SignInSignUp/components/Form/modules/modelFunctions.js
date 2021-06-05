import { CreateUser }            from  "../../../../../api_services/user-api-service"
import { CreateBudget }          from  "../../../../../api_services/budget-api-service.ts"
import { CreateIncome }          from  "../../../../../api_services/income-api-service"
import { CreateCategory }        from  "../../../../../api_services/category-api-service"
import { CreateExpense }         from  "../../../../../api_services/expense-api-service"
import { CreateEntireCashflow }  from  "../../../../../api_services/cashflow-api-service.ts"
import { defaultCategories }     from  "../../../../../exports/defaultCategories"


const initUserAccount = async (email, password) => {
    try {
        const {data, status} = await CreateUser({ email, password })
        const { user } = data
        return [user, user.id, status]
    } catch (error) {
        console.log(error)
    }
}


const initBudget = async (userId) => {
    try {
        const budget = await CreateBudget({userId})
        const { id: budgetId } = budget
        return budgetId
    } catch (error) {
        console.log(error)
    }
}


const initCategory =  async (budgetId, category) => {
    try {
        const newCategory = await CreateCategory({budgetId, name: category})
        const { id: categoryId } = newCategory
        return categoryId
    } catch (error) {
        console.log(error)
    }
}


const initExpenses = async (categoryId, expenses) => {
    try {
        expenses.forEach( async (expense) => {
            await CreateExpense({categoryId, expense: expense, amount: 0})
        })
    } catch (error) {
        console.log(error)
    }
}


const initCategoriesAndExpenses = async (budgetId, defaultCategories) => {
    try {
        for (let category in defaultCategories) {
            const expenses = defaultCategories[category]
            const categoryId = await initCategory(budgetId, category)
            await initExpenses(categoryId, expenses)
        }
    } catch (error) {
        console.log(error)
    }
}


const initializeAccount = async (email, password) => {
    const [user, userId, status] = await initUserAccount(email, password)
    const budgetId = await initBudget(userId)
    await CreateIncome({budgetId, source: "Job", amount: 0})
    await initCategoriesAndExpenses(budgetId, defaultCategories)
    await CreateEntireCashflow({ userId: userId })
    return [user, status]
}


export default initializeAccount