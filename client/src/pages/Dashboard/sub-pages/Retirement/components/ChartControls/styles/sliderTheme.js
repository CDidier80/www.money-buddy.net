import { createMuiTheme } from '@material-ui/core/styles';

export let themeData = {
    overrides: {
        MuiSlider: {
            root: {
                // height: 2,
                // width: '100%',
                // cursor: 'pointer',
                // padding: '13px 0',
                // touchAction: 'none',
                // position: 'relative',
                // display: 'inline-block',
                // boxSizing: 'content-box',
                // WebkitTapHighlightColor: 'transparent',
                // '&$disabled': {
                //     pointerEvents: 'none',
                //     cursor: 'default',
                // },
                // '&$vertical': {
                //     width: 2,
                //     height: '100%',
                //     padding: '0 13px'
                // },
                // The primary input mechanism of the device includes a pointing device of limited accuracy.
                // '@media (pointer: coarse)': {
                //     // Reach 42px touch target, about ~8mm on screen.
                //     padding: '20px 0',
                //     '&$vertical': {
                //     padding: '0 20px'
                //     }
                // },
                // '@media print': {
                //     colorAdjust: 'exact'
                // }
            },
            /* Styles applied to the root element if `marks` is provided with at least one label. */
            // marked: {
            //     marginBottom: 20,
            //     '&$vertical': {
            //         marginBottom: 'auto',
            //         marginRight: 20
            //     }
            // },
        
            /* Styles applied to the rail element. */
            rail: {
                height: 2,
                width: '100%',
                borderRadius: 1,
                display: 'block',
                position: 'absolute',
                backgroundColor: 'rgba(10,102,102,.7)',
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
                backgroundColor: 'rgba(10,102,102,.7)',
                '$vertical &': {
                    width: 2
                }
            },
        
            /* Styles applied to the track element if `track={false}`. */
            // trackFalse: {
            //     '& $track': {
            //         display: 'none'
            //     }
            // },
        
            /* Styles applied to the track element if `track="inverted"`. */
            // trackInverted: {
            //     '& $track': {

            //     },
            //     '& $rail': {
            //         opacity: 1
            //     }
            // },
        
            /* Styles applied to the thumb element. */
            thumb: {
                width: 12,
                height: 12,
                display: 'flex',
                outline: 0,
                position: 'absolute',
                marginTop: -5,
                boxSizing: 'border-box',
                marginLeft: -6,
                alignItems: 'center',
                borderRadius: '50%',
                justifyContent: 'center',
                backgroundColor: '#fdbb2d',
                border: "1px solid black",
                borderShadow: "0 0 5px black",

            // '&::after': {
            //     position: 'absolute',
            //     content: '""',
            //     borderRadius: '50%',
            //     // reach 42px hit target (2 * 15 + thumb diameter)
            //     top: -15,
            //     left: -15,
            //     right: -15,
            //     bottom: -15
            // },
            '&$focusVisible,&:hover': {
                boxShadow: "0px 0px 0px 9px rgba(232, 184, 30, .28)",
                '@media (hover: none)': {
                boxShadow: 'none'
                }
            },
            // '&$active': {

            // },
            // '&$disabled': {
            //     width: 8,
            //     height: 8,
            //     marginTop: -3,
            //     marginLeft: -4,
            //     '&:hover': {
            //         boxShadow: 'none'
            //     }
            // },
            // '$vertical &': {
            //     marginLeft: -5,
            //     marginBottom: -6
            // },
            // '$vertical &$disabled': {
            //     marginLeft: -3,
            //     marginBottom: -4
            // }
            },
    
        
            /* Styles applied to the thumb label element. */
            valueLabel: {
                // IE 11 centering bug, to remove from the customization demos once no longer supported
                color: "#0a6666",
                fontWeight: "bold",
                fontSize: "11px",
                left: 'calc(-50% - 6px)',
                transform: "scale(1.1) translateY(-10px)!important"
            },
            

        
            /* Styles applied to the mark element. */
            // these are small portions of the track corresponding to text-markers
            mark: {
                width: 2,
                height: 2,
                borderRadius: 1,
                position: 'absolute',
                backgroundColor: 'rgba(10,102,102,.7)'
            },
        
            /* Styles applied to the mark element if active (depending on the value). */
            // markActive: {
            //     opacity: 0.8
            // },
        
            /* Styles applied to the mark label element. */
            // markLabel: (0, _extends2.default)({}, theme.typography.body2, {
            //     position: 'absolute',
            //     top: 26,
            //     transform: 'translateX(-50%)',
            //     whiteSpace: 'nowrap',
            //     '$vertical &': {
            //         top: 'auto',
            //         left: 26,
            //         transform: 'translateY(50%)'
            //     },
            //     '@media (pointer: coarse)': {
            //         top: 40,
            //         '$vertical &': {
            //         left: 31
            //         }
            //     }
            // }),
        
            /* Styles applied to the mark label element if active (depending on the value). */
            // markLabelActive: {
            // }
        },
        },
    }
    
    
    
    
    

