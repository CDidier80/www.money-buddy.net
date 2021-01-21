import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'


const useResponsiveStyle = (queryString) => {
    return useMediaQuery(queryString)

}

export default useResponsiveStyle