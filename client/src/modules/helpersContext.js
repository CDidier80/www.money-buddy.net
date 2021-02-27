import  { createContext } from "react"

class Helpers {
    static taggedLog (varObj) {
        const name = Object.keys(varObj)[0]
        console.log(`${name}: `, varObj[name])
    }
}

export default HelperContext = createContext(Helpers)
