
/**
 * @param PURPOSE identify the media query instances that a css property will use
 * @param {STRING} queryString string equivalent of variable name for media query rule
 * @param {ARRAY} queryKeys contains a list of query strings used to identify queries used by a css property
 * @param {BOOLEAN} RETURN  true if the query string is not present in the queryKeys array, false if present
 */

const filterUnusedQuery = (queryString, queryKeys) => queryKeys.indexOf(queryString) === -1
/*
 * ==================================================================================================
 */

/**
 * @param PURPOSE quick check to see if an array is empty or has items
 * @param {ARRAY} array an array whose length will be examined
 * @param {BOOLEAN} RETURN true if the array length is greater than 0, false if empty
 */
const hasContent = (array) => array.length < 0

/*
 * ==================================================================================================
 */

/**
 * @param PURPOSE  
 * Determine whether the passed query instance is used by a css prop, and return it
 * with it's associated style object if used.
 *      
 * @param {STRING}  qs      string equivalent of variable name for media query rule
 * @param {BOOLEAN} qi      corresponds to the current state of the media query instance
 * @param {ARRAY}   qks     contains string versions of media queries used by the css property
 * @param {OBJECT}  pobj    keys match media query strings, values are style objects
 * @param {ARRAY}   RETURN  first item is media query instance, 2nd item is associtated style object
 */

const makeRule = (qs, qi, qks, pobj) => filterUnusedQuery(qs, qks) ? [] : [qi, pobj[qs]]

 /*
 * ==================================================================================================
 */

 /**
 * @param PURPOSE  create a hierarchical set of media queries, each corresponding to a style object  
 * @param {STRING}  cssProp       string equivalent of variable name for media query rule
 * @param {OBJECT}  rulesObject   contains k:v pairs of { <media query string> : <style object>, ...}
 * @param {ARRAY}   queriesArray  constains nested arrays with [<query instance>, <stringified query name>]
 * @param {ARRAY}   RETURN        contains arrays of [<query instance>, <style object>] rules
 */

const makePropertyRules = (cssProp, rulesObject, queriesArray) => {
    const [queryKeys, propObject] = [Object.keys(rulesObject[cssProp]), rulesObject[cssProp]]
    return queriesArray.reduce((propertyRuleset, [queryInstance, queryString]) => {
        const rule = makeRule(queryString, queryInstance, queryKeys, propObject)
        return hasContent(rule) ? propertyRuleset : [...propertyRuleset, rule]
    }, [])
}


/*
 * ==================================================================================================
*/


 /**
 * @param PURPOSE  create a responsive-style ruleset for each css property in a component
 * @param {STRING}  queriesArray   string equivalent of variable name for media query rule
 * @param {OBJECT}  rulesObject    contains k:v pairs of { <media query string> : <style object>, ...}
 * @param {OBJECT}  RETURN         keys are jss properties. Each value is an array containing arrays of [<query-instance>, <style-object>] rules
 */

export default function useComponentRuleset(queriesArray, rulesObject) {

    const componentRuleset = {}
    const cssProperties = Object.keys(rulesObject)
    cssProperties.forEach(cssProp => {
        componentRuleset[cssProp] = makePropertyRules(cssProp, rulesObject, queriesArray)
    })
    return componentRuleset
}


