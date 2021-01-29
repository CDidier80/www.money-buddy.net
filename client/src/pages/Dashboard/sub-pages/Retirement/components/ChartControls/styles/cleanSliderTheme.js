import { TextareaAutosize } from "@material-ui/core"

export let themeData = {
    overrides: {
        MuiSlider: {
            /* Styles applied to the rail element. */
            root: {
                // marginBottom: "20px"
                backgroundColor: "white",
                width: "87%",
                margin: "auto",
                display: "block"
            },
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
                '&$focusVisible,&:hover': {
                    boxShadow: "0px 0px 0px 9px rgba(232, 184, 30, .28)",
                    '@media (hover: none)': {
                    boxShadow: 'none'
                    }
                },
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
        },
    },
}
    

export const deepCloneTheme = (theme) => {
    
}
    
    
    

