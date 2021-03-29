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
const primaryLightest = "rgba(235, 247, 255)"
const primaryTeal = "rgba(51, 255, 255)"
// pink/orange tone
const secondaryMain = 'rgba(255, 57, 57)'
const secondaryBright = 'rgba(255, 124, 110)'  
const secondaryLightest = 'rgba(255, 245, 245)'  
const secondaryDark = 'rgba(124, 27, 29)'  
const secondaryMedium = "rgba(191,51,51)"
const secondaryWrapper = 'rgba(239, 84, 84)'  


// other 
const net = "rgba(54, 127, 171)" // a light blue with gray tones
const linkHover = "#ffd95d"



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


        /** 
        * ----------------------------------------
        *               PRIMARY 
        * ----------------------------------------
        */

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
        primaryLightest: {
            main: primaryLightest,
            transparent: makeTransparentVariants(primaryLightest)
        },
        primaryTeal: {
            main: primaryTeal,
            transparent: makeTransparentVariants(primaryTeal)
        },


        /** 
        * ----------------------------------------
        *               SECONDARY 
        * ----------------------------------------
        */
        secondary: {
            main: secondaryMain,
            transparent: makeTransparentVariants(secondaryMain)
        },
        secondaryMedium: {
            main: secondaryMedium,
            transparent: makeTransparentVariants(secondaryMedium)
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
        contrastThreshold: 3,
        tonalOffset: 0.2,


        /** 
        * ----------------------------------------
        *            OTHER COLORS 
        * ----------------------------------------
        */

        net: {
            main: net,
            transparent: makeTransparentVariants(net)
        },
    
        linkHover: {
            main: linkHover,
            transparent: makeTransparentVariants(linkHover)
        },
    },


    /** 
    * ----------------------------------------
    *            ROW COLORS
    * ----------------------------------------
    */

    rowColor: primaryLightest,
    offRowColor: secondaryLightest,


    /** 
    * ----------------------------------------
    *                  FONT
    * ----------------------------------------
    */

    lato: {
        textRendering: "optimizeLegibility !important",
        WebkitFontSmoothing: "antialiased !important",
        fontFamily: "Lato, sans-serif",
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
            // backgroundColor: "rgba(0,0,0,0)",
            // "&:-internal-autofill-selected": {
            //     color: "blue",
            // },
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

        /* ------------------RETIREMENT SLIDER THEME STYLES ------------------*/

        /* for text */
        MuiInputBase: {
            root: {
                color: "black",
                fontFamily: "Lato,sans-serif",
                '&:hover .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: secondaryMain
                }
            },
        },
        MuiSlider: {
            /* Styles applied to the rail element. */
            root: {
                width: "87%",
                margin: "auto",
                display: "block",
                backgroundColor: "white",
            },
            rail: {
                height: 2,
                width: '100%',
                borderRadius: 1,
                display: 'block',
                position: 'absolute',
                backgroundColor: addTransparency(.6, secondaryMain),
                '$vertical &': {
                    height: '100%',
                    width: 2
                }
            },
            /* Styles applied to the track element. */
            track: {
                height: 2,
                borderRadius: 1,
                display: 'block',
                position: 'absolute',
                backgroundColor: secondaryMain,
                '$vertical &': {
                    width: 2
                }
            },
            /* Styles applied to the thumb element. */
            thumb: {
                width: 12,
                height: 12,
                outline: 0,
                marginTop: -5,
                marginLeft: -6,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                position: 'absolute',
                boxSizing: 'border-box',
                justifyContent: 'center',
                border: "1px solid black",
                backgroundColor: primaryMain,
                borderShadow: "0 0 5px black",
                '&$focusVisible, &:hover': {
                    boxShadow: `0px 0px 0px 9px ${addTransparency(.3, primaryBright)}`,
                    '@media (hover: none)': {
                    boxShadow: 'none'
                    }
                },
        },

            /* Styles applied to the thumb label element. */
            valueLabel: {
                // IE 11 centering bug, to remove from the customization demos once no longer supported
                color: addTransparency(.8,primaryMain),
                fontWeight: "bold",
                fontSize: "11px",
                left: 'calc(-50% - 6px)',
                transform: "scale(1.1) translateY(-10px)!important"
            },
            /* Styles applied to the mark element. */
            mark: {
                width: 2,
                height: 2,
                borderRadius: 1,
                position: 'absolute',
                backgroundColor: primaryDark.main
            },
        }
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


export const pickColor = index => index % 2 === 0 ? primaryLightest : secondaryLightest