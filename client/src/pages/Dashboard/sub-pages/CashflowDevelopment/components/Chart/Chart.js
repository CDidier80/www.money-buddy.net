import React, { useEffect, useState, memo } from 'react';
import { Line } from 'react-chartjs-2'
import "./styles/chart.css"
import {
    universalProperties,
    configureAxes,
    tooltips,
    labels,
} from "./chartData"



const Chart = memo((props) => {

    /* -------------------------- PROPS ------------------------- */

    const {
        inflows,
        outflows, 
        cashReserves
    } = props.fromCashflowDevelopment

    const { callback: toCurrency } = props.currencyChartCallback

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

const chartData = {

    labels : [...labels],
    datasets: [
        {
            fill: false,
            label: 'Inflows',
            data: inflowDataset,
            ...universalProperties,
            borderColor: '#005f61',

        },
        {
            fill: false,
            label: 'Outflows',
            data: outflowDataset,
            ...universalProperties,
            borderColor: 'rgb(192,87,75)',

        },
        {
            fill: true,
            data: cashDataset,
            ...universalProperties,
            label: 'Cash Available',
            borderColor: 'rgba(40,211,236,.6)',
        }

]}

const options = {
    tooltips: tooltips,
    scales: configureAxes(toCurrency)
}

/* ----------------------- JSX ----------------------- */

    return ( !loaded ? <div></div> :
        <div
            className="cashflow-chart"
        >
            <Line 
                className="line-component"
                data={chartData} 
                options={options}
            />
        </div>
    )
}, (prevProps, nextProps) => prevProps.fromCashflowDevelopment.showPopup !== nextProps.fromCashflowDevelopment.showPopup)

export default Chart