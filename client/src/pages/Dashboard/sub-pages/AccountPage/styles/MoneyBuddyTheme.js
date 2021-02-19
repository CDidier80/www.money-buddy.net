import { createMuiTheme } from '@material-ui/core/'
import React, { useState } from 'react'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2227c3',
        },
        secondary: {
            main: '#ff3939',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
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

