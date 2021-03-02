import Header from "../../../../components/reuseable/Header"
import { RandomizeButton } from './RandomizeButton'
import "./cashflowHeader.css"
import React from 'react'

const CashflowHeader = (props) => (

        <Header text="CASHFLOWS" >
            <RandomizeButton {...props} />
        </Header>
    
)

export default CashflowHeader
