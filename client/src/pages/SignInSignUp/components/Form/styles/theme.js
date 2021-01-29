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
                    "border-left-color": 'green',
                    "border-right-color": 'green',
                    "border-bottom-color": 'green',
                        }
                    },
            notchedOutline: {
                borderColor: 'green',
                backgroundColor: "rgba(255, 235, 0, .20)",
                background: "linear-gradient(180deg, rgba(34, 193, 195, .08), rgba(253, 187, 45, .08))"

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