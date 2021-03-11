import "./styles/chart.css"
import { Line } from 'react-chartjs-2'
import { configureChart } from "./modules/configureChart"
import React, { useEffect, useState, memo } from 'react';

const Chart = memo((props) => {

    /* -------------------------- PROPS ------------------------- */

    const { inflows, outflows, cashReserves } = props

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
            inflowDataset  !== ""  |
            outflowDataset !== ""  |
            cashDataset    !== "" 
        ) { setLoaded(true) }
    }, [
        outflowDataset, 
        inflowDataset,
        cashDataset
    ])

/* ----------------------- PROPS FOR CHART ---------------------- */

    const configDatasets = { inflowDataset, outflowDataset, cashDataset }

    const { chartData, options } = configureChart(configDatasets)
/* ----------------------- JSX ----------------------- */

    return ( !loaded ? <div></div> :
        <div
            className="cashflow-chart"
        >
            <Line 
                data={chartData} 
                options={options}
                className="line-component"
            />
        </div>
    )
}, ({showPopup: prevPopup}, {showPopup: nextPopup}) => prevPopup !== nextPopup
)

export default Chart