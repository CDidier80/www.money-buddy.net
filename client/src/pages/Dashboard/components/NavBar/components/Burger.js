import blueGrey from '@material-ui/core/colors/blueGrey'
import { useBurgerStyles } from '../styles/navbarStyles'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import React from 'react'


const Burger = (props) => {

    const { 
        ticker,
        setTicker,
        userPreference,
        setUserPreference
    } = props

    const iconStyle = { margin: '6px 0 0 6px' }
    
    const handleBurger = (e) => {
        setUserPreference( 
            ((userPreference === '') && (window.innerWidth <= 600 ? 'open' : 'closed')) || 
            (userPreference === 'open' && 'closed' || 'open')
        )
        setTicker(ticker + 1)
    }

    const { burgerWrapper, burger } = useBurgerStyles(props.theme)

    return (
        <IconButton 
            style={iconStyle}
            className={burgerWrapper}
            onClick={(e)=>handleBurger(e)} 
        >
            <MenuIcon 
                htmlColor={blueGrey[50]}
                fontSize='default' 
                className={ burger }
            />
        </IconButton> 
    )
}

export default Burger
