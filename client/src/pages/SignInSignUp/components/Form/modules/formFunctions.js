import emailValidityCheck from "./emailValidition/emailValidationFunctions"
import { LogInUser } from '../../../../../Services/UserService'
import initializeAccount from "./modelFunctions"


export const signup = async (props) => {
    const {
        reenteredPassword, 
        setUserInfo, 
        password, 
        setAuth, 
        email
    } = props

    try {
        if (password !== reenteredPassword){
            return false
        }
        if (!emailValidityCheck(email)){
            return false
        }
        const response = await initializeAccount(email, password)
        const {data: user, status} = response
        if (status === 200) {
            setUserInfo(user)
            setAuth(true)
        }
        return true
    } catch (error) {
        throw error
    }
}


export const signin = async (props) => {
    const { 
        setUserInfo, 
        password, 
        setAuth, 
        history, 
        email, 
    } = props
    try {
        const response = await LogInUser({ email, password })
        if (response.status === 200) {
            setAuth(true)
            setUserInfo(response.data.user)
            history.push('/dashboard')
        } 
    } catch (error) {
        throw error
    }
}

