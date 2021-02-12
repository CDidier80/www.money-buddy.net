import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const { 
        authenticated, 
        verifyTokenValid, 
        revokeClearAndRedirect 
    } = props.fromApp

    const [routeLoaded, setRouteLoaded] = useState(false)

    useEffect(() => {
        let routeMounted = true
        const safelyRenderRoute = async () => {
            const safeToRender = await verifyTokenValid()
            if (!safeToRender) {
                revokeClearAndRedirect()
                return
            }
            routeMounted && setRouteLoaded(true)
        } 
        if (!routeLoaded) safelyRenderRoute() 
        return () => routeMounted = false
    }, [routeLoaded])

    return  (
        routeLoaded &&  (
            authenticated ?
            <Route> {props.children} </Route> : 
            <Redirect to="/login" /> 
        )
    )
        
}

export default ProtectedRoute
