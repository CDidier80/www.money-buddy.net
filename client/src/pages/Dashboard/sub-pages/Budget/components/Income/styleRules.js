import { makeStyles, useMediaQuery } from '@material-ui/core'


export const incomeHeaderRules = {
    "&:last-child": {
        maxWidth480px: {
            "&:last-child": {
                textAlign: "center",
                paddingRight: 0,
                width: "75px",
            }
        },
        maxWidth410px: {
            "&:last-child": {
                textAlign: "center",
                paddingRight: 0,
                width: "55px",
            }
        }
    },

    padding: {
        maxWidth725px: {
            padding: "6px 5px 6px 16px"
        },
        maxWidth480px: {
            padding: "6px 0px 6px 0px", 
            // cancels mui paddingRight override
            paddingRight: "0"
        }
    },

    fontSize: {
        maxWidth725px: {
            fontSize: "11px"
        },
        maxWidth390px: {
            fontSize: "12px"
        }
    },
}



// const checkRuleExists = (ruleOrder) => {
//     const keys = Object.keys(ruleSetObject)
//     for (let i=queriesArray.length-1; i<=0; i--) {
//         const hasRule = Object.hasOwnProper
//         if ()
//     }
// }

// export const incomeHeaderRules = {
//     "&:last-child": {
//         maxWidth480px: {
//             "&:last-child": {
//                 textAlign: "center",
//                 paddingRight: 0,
//                 width: "75px",
//             }
//         },
//         maxWidth410px: {
//             "&:last-child": {
//                 textAlign: "center",
//                 paddingRight: 0,
//                 width: "55px",
//             }
//         }
//     },

//     padding: {
//         maxWidth725px: {
//             padding: "6px 5px 6px 16px"
//         },
//         maxWidth480px: {
//             padding: "6px 0px 6px 0px", 
//             // cancels mui paddingRight override
//             paddingRight: "0"
//         }
//     },

//     fontSize: {
//         maxWidth725px: {
//             fontSize: "11px"
//         },
//         maxWidth390px: {
//             fontSize: "12px"
//         }
//     },
//     fontSize: [
//         [
//             "maxWidth725px", 
//             { fontSize: "11px" }
//         ]
//     ]
//         maxWidth725px: ,
//         maxWidth390px: {
//             fontSize: "12px"
//         }
//     }

// }

