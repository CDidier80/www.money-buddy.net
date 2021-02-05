import { Typography, Box } from '@material-ui/core'
import React from 'react'


const Copyright = () => {
    
    const font = {
        fontFamily: "Lato,sans-serif",
        WebkitFontSmoothing: "antialiased!important",
        textRendering: "optimizeLegibility!important",
    }

    const copyright = `Copyright © ${new Date().getFullYear()} www.money-buddy.net`

    return (
        <Box mt={5}>
            <Typography 
                color="textSecondary" 
                variant="body2" 
                align="center"
                style={font}
            >
                {copyright}
            </Typography>
        </Box>
    );
}

export default Copyright