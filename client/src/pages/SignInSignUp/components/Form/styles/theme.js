import { createMuiTheme } from '@material-ui/core/'

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#22c1c3',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#fdbb2d',
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    MuiOutlinedInput : {
    },
    overrides: {
        MuiInput: {
            "&:-internal-autofill-selected": {
                color: "blue"
            }
        },
        MuiOutlinedInput : {
            root: {
                borderColor: "yellow",
                '&:hover': {
                    borderColor: 'green',
                    "border-top-color": 'green',
                    "border-right-color": 'green',
                    "border-bottom-color": 'green',
                    "border-left-color": 'green',
                        }
                    },
            notchedOutline: {
                // backgroundColor: "rgba(249, 216, 0, 0.3)",
                borderColor: 'green',

            },
        },
            MuiInputBase: {
                root: {
                    color: "black",
                    fontFamily: "Lato,sans-serif",
                    '&:hover .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'green',
                        "border-top-color": 'green',
                        "border-right-color": 'green',
                        "border-bottom-color": 'green',
                        "border-left-color": 'green',
                            }
                },
            },
            MuiInputLabel: {
                outlined: {
                    color: "black"
                }
            },
        }
})

export default theme