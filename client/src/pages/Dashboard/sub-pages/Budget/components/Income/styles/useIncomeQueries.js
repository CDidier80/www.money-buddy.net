import useStyleToolkit, { nssr } from "../../../../../../../ResponsiveStyles/useStyleToolkit"
import QueryParser from '../../../../../../../ResponsiveStyles/QueryParser'
import { useMediaQuery } from '@material-ui/core'
import * as IncomeRules from "./styleRules"



/*
=-----------------------------------------------------------------------------------
*/


export const useIncomeHeaderQueries = () => {
    
    const maxWidth390px = useMediaQuery('(max-width: 390px)', nssr)
    const maxWidth725px = useMediaQuery('(max-width: 725px)', nssr)
    const maxWidth480px = useMediaQuery('(max-width: 480px)', nssr)
    const maxWidth410px = useMediaQuery('(max-width: 410px)', nssr)

    const queriesObject = {
        maxWidth725px,
        maxWidth480px,
        maxWidth410px,
        maxWidth390px,
    }

    const queriesArray = [
        [maxWidth725px, "maxWidth725px"],
        [maxWidth480px, "maxWidth480px"],
        [maxWidth410px, "maxWidth410px"],
        [maxWidth390px, "maxWidth390px"],
    ]

    const {incomeHeaderRules: rules} = IncomeRules
    const styleToolkit = useStyleToolkit({queriesObject, queriesArray, rules})
    
    return styleToolkit
}



/*
=-----------------------------------------------------------------------------------
*/

export const useEmptyCellQueries = () => {
    const maxWidth450px = useMediaQuery('(max-width: 450px)', nssr)
    const Parser = new QueryParser()
    const {maxWidth450px: smallerWidths} = IncomeRules.emptyCellRules
    const useSmallerWidths = Parser.addStyleOnQuery(maxWidth450px, smallerWidths)
    return useSmallerWidths
}


/*
=-----------------------------------------------------------------------------------
*/


export const useIncomeTableQueries = () => {
    
    const maxWidth725px = useMediaQuery('(max-width: 725px)', nssr)


    const queriesObject = {
        maxWidth725px,
    }
    const queriesArray = [
        [maxWidth725px, "maxWidth725px"],
    ]


    const {incomeTableRules: rules} = IncomeRules
    const styleToolkit = useStyleToolkit({queriesObject, queriesArray, rules})
    
    return styleToolkit
}