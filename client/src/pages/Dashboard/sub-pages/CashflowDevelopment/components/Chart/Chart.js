import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import "./styles/chart.css"
import {
    labels,
    universalProperties,
    tooltips,
    configureAxes
} from "./chartData"



const Chart = (props) => {

    // console.log(months)
    /* -------------------------- PROPS ------------------------- */

    const { callback: toCurrency } = props.currencyChartCallback

    const {
        inflows,
        outflows, 
        cashReserves
    } = props.fromCashflowDevelopment

    /* -------------------------- STATE ------------------------- */

    const [inflowDataset, setInflowDataset] = useState("")
    const [outflowDataset, setOutflowDataset] = useState("")
    const [cashDataset, setCashDataset] = useState("")
    const [loaded, setLoaded] = useState(false)


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
                data={chartData} 
                options={options}
            />
        </div>
    )
}

export default Chart