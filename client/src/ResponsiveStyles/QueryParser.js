export default function QueryParser() {

    /**
     * @param  PURPOSE return the style object if the query is true, or empty object if not
     * @param {BOOLEAN} query true/false depending on the response to the media query
     * @param {OBJECT} query the style object to return if the media query is true
     * @param return if the query is false, returns false. If query is true, returns style object.
     */

    this.addStyleOnQuery = (query, styleObject) => query ? styleObject : {}

    /**
     * @param  PURPOSE return the style object if the query is true, or false
     * @param {Array} queriesWithStyles an array containing arrays of [query, styleObj]. 
     * @param return if the query is false, returns false. If query is true, returns style object.
     */

    this.styleQueryArray = ([mediaQuery, styleObject]) => mediaQuery && styleObject
    /**
     * @param  PURPOSE find the highest priority style rule according to corresponding media queries
     * @param {Array} queriesWithStyles an array containing arrays of [query, styleObj]. 
     * @param return the style object found to have highest priority 
     */

    this.getPriorityStyle = (queriesWithStyles) => {
        let style = {}
        queriesWithStyles.forEach(array => { 
            const styleReturned = this.styleQueryArray(array)
            if (styleReturned) (style = {...styleReturned})
        })
        return style
    }

    /**
     * @param  PURPOSE find the highest priority style rule according to corresponding media queries
     * @param {OBJECT} rulesets keys are jss properties. Each value is an array containing arrays of [query, styleObj]. 
     * @param return keys are same jss properties as args passed. Values are the priority style objects.
     */

    this.getPriorityStyles = (rulesets) => {
        const jssProperties = Object.keys(rulesets)
        const priorityStyles = {}

        jssProperties.forEach(key => {
            priorityStyles[key] = this.getPriorityStyle(rulesets[key])
        })

        return priorityStyles
    }

}

