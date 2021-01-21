import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const accordionTheme = createMuiTheme({
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
                    marginTop: "6px"
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
        },
    })