import { configureChart } from "./modules/configureChart"
import React, { useEffect, useState, memo } from 'react'
import { Line } from 'react-chartjs-2'
import "./styles/chart.css"

const Chart = memo((props) => {

    /* -------------------------- PROPS ------------------------- */

    const {
        inflows,
        outflows, 
        cashReserves
    } = props.fromCashflowDevelopment

    /* -------------------------- STATE ------------------------- */

    const [loaded, setLoaded] = useState(false)
    const [cashDataset, setCashDataset] = useState("")
    const [inflowDataset, setInflowDataset] = useState("")
    const [outflowDataset, setOutflowDataset] = useState("")

    /* ------------------------ useEffects ----------------------- */

    useEffect(() => {
        setInflowDataset(inflows)
        setOutflowDataset(outflows)
        setCashDataset(cashReserves)
    }, [])


    useEffect(() => {
        if (
            inflowDataset  !== ""  &&
            outflowDataset !== ""  &&
            cashDataset    !== "" 
        ) setLoaded(true) 
    }, [
        outflowDataset, 
        inflowDataset,
        cashDataset
    ])

/* ----------------------- PROPS FOR CHART ---------------------- */

    const configDatasets = { inflowDataset, outflowDataset, cashDataset }

    const { chartData, options } = configureChart(configDatasets)

    const chartProps = {
        data: chartData,
        options: options,
        className: "line-component"
    }
    
/* ----------------------- JSX ----------------------- */

    return ( !loaded ? <div></div> :
        <div className="cashflow-chart" >
            <Line {...chartProps} />
        </div>
    )
}, ({fromCashflowDevelopment: prev}, {fromCashflowDevelopment: next}) => 
    prev.showPopup !== next.showPopup
)

export default Chart