import emailValidityCheck from "../../../../../modules/emailValidition/emailValidationFunctions"
import { LogInUser } from '../../../../../services/api_services/user-api-service.ts'
import initializeAccount from "./modelFunctions"


export const signup = async props => {
    const {
        reenteredPassword,
        setUser,
        password,
        setAuthenticated,
        email
    } = props

    try {
        if (password !== reenteredPassword){
            return false
        }
        if (!emailValidityCheck(email)){
            return false
        }
        const [user, status] = await initializeAccount(email, password)
        if (status === 200) {
            setUser(user)
            setAuthenticated(true)
        }
        return true
    } catch (error) {
        console.log(error)
    }
}


export const signin = async props => {
    const {
        setUser,
        password,
        setAuthenticated,
        history,
        email,
    } = props
    try {
        const response = await LogInUser({ email, password })
        if (response.status === 200) {
            setAuthenticated(true)
            setUser(response.data.user)
            history.push('/dashboard')
        }
    } catch (error) {
        console.log(error)
    }
}

