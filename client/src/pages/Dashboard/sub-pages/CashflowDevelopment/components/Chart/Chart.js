import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import "./styles/chart.css"
import {
    labels,
    universalProperties,
    tooltips
} from "./chartData"



const Chart = (props) => {

    // console.log(months)
    /* -------------------------- PROPS ------------------------- */

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
        inflowDataset,
        outflowDataset, 
        cashDataset
    ])


/* ----------------------- PROPS FOR CHART ---------------------- */

const chartData = {

    labels : [...labels],
    datasets: [
        {
            label: 'Inflows',
            fill: false,
            borderColor: '#005f61',
            data: inflowDataset,
            ...universalProperties

        },
        {
            label: 'Outflows',
            fill: false,
            borderColor: 'rgb(192,87,75)',
            data: outflowDataset,
            ...universalProperties

        },
        {
            label: 'Cash Available',
            fill: true,
            borderColor: 'rgba(40,211,236,.6)',
            data: cashDataset,
            ...universalProperties
        }

]}

const options = {
    tooltips: tooltips
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