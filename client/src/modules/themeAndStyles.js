import { createMuiTheme } from '@material-ui/core/'

/** 
* ----------------------------------------
*  Transparency Helper Functions
* ----------------------------------------
*/

const addTransparency = (alpha, rgb) => rgb.replace(")", `, ${alpha})`)

const makeTransparentVariants = (rgb) => ({
    "05": addTransparency(.05, rgb),
    1: addTransparency(.1, rgb),
    2: addTransparency(.2, rgb),
    3: addTransparency(.3, rgb),
    4: addTransparency(.4, rgb),
    5: addTransparency(.5, rgb),
    6: addTransparency(.6, rgb),
    7: addTransparency(.7, rgb),
    8: addTransparency(.8, rgb),
    9: addTransparency(.9, rgb),
})

/** 
* ----------------------------------------
*  Color Variables: adjust to populate
*  the mui theme.
* ----------------------------------------
*/

// blue tone
const primaryMain = 'rgba(34, 39, 195)'
const primaryDark = 'rgba(24, 20, 93)'
const primaryBright = 'rgba(81, 125, 222)'
// pink/orange tone
const secondaryMain = 'rgba(255, 57, 57)'
const secondaryBright = 'rgba(255, 124, 110)'  
const secondaryDark = 'rgba(124, 27, 29)'  
const secondaryWrapper = 'rgba(239, 84, 84)'  


export const moneyBuddyTheme = createMuiTheme({
    boxShadows: {
        shadow1: `
        rgba(50, 50, 93, 0.33) 0px 11px 23px -5px, 
        rgba(0, 0, 0, 0.5) 0px 6px 13px -8px`,

        shadow2: `            
        2px 3px 1px -2px rgba(0,0,0,0.3), 
        2px 2px 2px 0px  rgba(0,0,0,0.22), 
        2px 1px 8px 0px rgba(0,0,0,0.18)`,

        buttonShadow: `
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, 
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`,

        wrapper: `        
            0px 2px 1px -1px rgba(0,0,0,0.2), 
            0px 1px 1px 0px rgba(0,0,0,0.14), 
            0px 1px 3px 0px rgba(0,0,0,0.12)`
    },

    gradients: {
        gradient1: `linear-gradient(
            90deg, 
            ${primaryMain}, 
            ${secondaryMain}
        )`,

        gradient2: `linear-gradient(
            180deg, 
            ${primaryMain}, 
            ${secondaryMain}
        )`,

        darkGradient1: `linear-gradient(
            180deg, 
            ${primaryDark}, 
            ${secondaryDark}
        )`,
        wrapper: `linear-gradient(
            180deg, 
            ${primaryDark}, 
            ${secondaryWrapper}
        )`,
    },

    palette: {
        primary: {
            main: primaryMain,
            transparent: makeTransparentVariants(primaryMain)
        },

        primaryDark: {
            main: primaryDark,
            transparent: makeTransparentVariants(primaryDark)
        },
        primaryBright: {
            main: primaryBright,
            transparent: makeTransparentVariants(primaryBright)
        },

        secondary: {
            main: secondaryMain,
            transparent: makeTransparentVariants(secondaryMain)
        },
        secondaryBright : {
            main: secondaryBright,
            transparent: makeTransparentVariants(secondaryBright)
        },
        secondaryDark : {
            main: secondaryDark,
            transparent: makeTransparentVariants(secondaryDark)
        },
        secondaryWrapper : {
            main: secondaryWrapper,
            transparent: makeTransparentVariants(secondaryWrapper)
        },

        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },


    lato: {
        textRendering: "optimizeLegibility !important",
        WebkitFontSmoothing: "antialiased !important",
        fontFamily: "Lato, sans-serif",
    },

    tableHeaders: {

    },



    overrides: {

        MuiAccordion: {
            root: {
                '&:first-child': {
                    '&:before': {
                    display: 'none'
                    }
                },
                '&$expanded': {
                    margin: '16px 0',
                    '&:first-child': {
                    marginTop: "1px"
                    },
                    '&:last-child': {
                    marginBottom: 0
                    },
                    '&:before': {
                    opacity: 0
                    }
                },
                '&$expanded + &': {
                    '&:before': {
                    display: 'none'
                    }
                },
            },
        },

        MuiInput: {
            backgroundColor: "rgba(0,0,0,0)",
            "&:-internal-autofill-selected": {
                color: "blue",
            },
        },

        MuiOutlinedInput : {
            root: {
                boxShadow: `
                    rgba(50, 50, 93, 0.33) 0px 11px 23px -5px, 
                    rgba(0, 0, 0, 0.5) 0px 6px 13px -8px`,
                '&:hover': {
                    borderColor: secondaryMain
                },
                "&:hover .MuiOutlinedInput-notchedOutline:hover": {
                    borderColor: secondaryMain,
                    height: "10px"
                },
            },
            // these styles are applied to the fieldset element
            // they control background color of textfields
            notchedOutline: {
                borderColor: primaryMain,
                // backgroundColor: addTransparency(.15, primaryMain),
                background: `linear-gradient( 
                    180deg, 
                    ${addTransparency(.06, primaryMain)}, 
                    ${addTransparency(.3, secondaryBright)}
                )`,
            },
        },

        /* for text */
        MuiInputBase: {
            // the root cont
            root: {
                color: "black",
                fontFamily: "Lato,sans-serif",
                '&:hover .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: secondaryMain
                }
            },
        },
        /* autofilled text labels for text fields, i.e. "password", "email" */
        MuiInputLabel: {
            outlined: {
                color: secondaryDark,
            }
        },
        }
})

export const gradientWrapper = {
    borderRadius: "8px",
    backgroundColor: "#2227c3",
    boxShadow:`        
        2px 3px 1px -2px rgba(0,0,0,0.3),
        2px 2px 2px 0px  rgba(0,0,0,0.22),
        2px 1px 8px 0px rgba(0,0,0,0.18);`,
    backgroundImage: "linear-gradient(180deg, #2227c3, #ff3939)"
}

export const latoTextStyle = {
    fontFamily: "Lato, sans-serif",
    textRendering: "optimizeLegibility !important",
    WebkitFontSmoothing: "antialiased !important"
}