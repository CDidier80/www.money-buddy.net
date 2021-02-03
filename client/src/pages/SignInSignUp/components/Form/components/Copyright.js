import { Typography, Box } from '@material-ui/core'
import React from 'react'


const Copyright = () => {
    
    const font = {
        fontFamily: "Lato,sans-serif",
        textRendering: "optimizeLegibility!important",
        WebkitFontSmoothing: "antialiased!important"
    }

    return (
        <Box mt={5}>
            <Typography 
                variant="body2" 
                color="textSecondary" 
                align="center"
                style={font}
            >
                {`Copyright © ${new Date().getFullYear()} www.money-buddy.com`}
            </Typography>
        </Box>
    );
}

export default Copyright