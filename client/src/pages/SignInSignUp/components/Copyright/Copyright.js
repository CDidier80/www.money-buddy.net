import React from 'react'
import { Typography }  from '@material-ui/core'


export const Copyright = () => {
    
    const font = {
        fontFamily: "Lato,sans-serif",
        textRendering: "optimizeLegibility!important",
        WebkitFontSmoothing: "antialiased!important"
    }

    return (
        <Typography 
            variant="body2" 
            color="textSecondary" 
            align="center"
            style={font}
        >
            {`Copyright © ${new Date().getFullYear()} www.money-buddy.com`}
        </Typography>
    );
}