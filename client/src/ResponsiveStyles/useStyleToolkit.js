import useComponentRuleset from "./useComponentRuleset"
import QueryParser from "./QueryParser"

export const nssr = {noSsr: true}

export default function useStyleToolkit({    
        queriesArray, 
        queriesObject, 
        rules,
    }){

    const componentRuleset = useComponentRuleset(
        queriesArray, 
        rules
    )

    const Parser = new QueryParser()
    const priorityStyles = Parser.getPriorityStyles(componentRuleset)

    const styleToolkit = {
        componentRuleset,
        priorityStyles,
        queriesObject, 
        queriesArray,
        Parser,
    }

    return styleToolkit
}