import { moneyBuddyTheme } from "../../../../../../modules/themeAndStyles"
import { useIncomeQueries } from "../../../../../../modules/useQueryHooks"
import QueryParser from "../../../../../../modules/queryParser"
import { makeStyles } from '@material-ui/core'
import * as Rules from "./styleRules"

const { palette: p, lato } = moneyBuddyTheme




export default function useIncomeStyles(styleHookKey, props) {

    const hookProps = props || {}

    const Parser = new QueryParser()

    /* media queries */

    const {
        maxWidth725px,
        maxWidth480px,
        maxWidth460px,
        maxWidth410px,
        maxWidth390px,
    } = useIncomeQueries()


    const useIncomeTableStyles = makeStyles(theme => {

        const paddingRules = [
            [true, {paddingLeft: "15px", paddingRight: "15px"}],
            [maxWidth725px, {padding: "6px"}]
        ]

        const paddingStyle = Parser.getPriorityStyle(paddingRules)

        const overflow = Parser.addStyleOnQuery([maxWidth725px, {overflowX: "hidden"}])

        return ({
            accordionDetails: {
                ...paddingStyle,
                ...overflow
            },
            table: {
                minWidth: "270px",
                ...overflow
            },
            tableContainer: {
                maxWidth: "890px",
                margin: "auto",
                ...overflow
            },
        })
    })
    
    
    const useIncomeHeaderStyles = makeStyles(theme => {

        const {
            padding, 
            fontSize, 
            "&:last-child": lastCell
        } = Rules.incomeHeaderRules
        
        const fontRules = [
            [maxWidth725px, fontSize.maxWidth725px],
            [maxWidth390px, fontSize.maxWidth390px]
        ]

        const paddingRules = [
            [maxWidth725px, padding.maxWidth725px],
            [maxWidth480px, padding.maxWidth480px],
        ]


        const lastChildRules = [
            [maxWidth480px, lastCell.maxWidth480px],
            [maxWidth410px, lastCell.maxWidth410px],
        ]

        const [
            fontStyle, 
            paddingStyle, 
            lastChildStyle,
        ] = Parser.getPriorityStyles([fontRules, paddingRules, lastChildRules])
    
        return ({
            headerCell: {
                ...Parser.addStyleOnQuery(maxWidth390px, { width: "70px"}),
                color: p.primaryDark.main,
                fontWeight: "bold",
                ...lastChildStyle,
                ...paddingStyle,
                ...fontStyle,
            },
        })
    })
    
    
    const useEmptyCellStyles = makeStyles(theme => {
        return({
            className: {
                emptyCell: {
                    maxWidth: "36px",
                    minWidth: "36px", 
                    padding: "0px"
                }
            }
        })
    })
    
    

    /* available style hooks */

    const styleHooks = {
        "IncomeTable": useIncomeTableStyles,
        "HeaderCell": useIncomeHeaderStyles,
        "EmptyCell": useEmptyCellStyles,
        
    }

    return styleHooks[styleHookKey](hookProps)
}
