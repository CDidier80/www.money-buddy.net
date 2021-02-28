export default function QueryParser() {

    this.addStyleOnQuery = (query, styleObject) => query ? styleObject : {}

    this.styleQueryArray = ([mediaQuery, styleObject]) => mediaQuery && styleObject
/**
 * @param  PURPOSE find the highest priority style rule accordion to corresponding media queries
 * @param {Array} queriesWithStyles an array containing arrays of [query, styleObj]. 
 * @param return the style object found to have highest priority 
 * 
 */
    this.getPriorityStyle = (queriesWithStyles) => {
        let style = {}
        queriesWithStyles.forEach(array => { 
            const styleReturned = this.styleQueryArray(array)
            if (styleReturned) (style = {...styleReturned})
        })
        return style
    }

    this.getPriorityStyles = (rulesets) => {
        return rulesets.map(ruleset => this.getPriorityStyle(ruleset))
    }

}

