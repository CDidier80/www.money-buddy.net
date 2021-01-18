import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import "./styles/chart.css"
import {
    labels,
    universalProperties,
    tooltips
} from "./chartData"



const Chart = ({months}) => {

    /* -------------------------- STATE ------------------------- */

    const [inflowDataset, setInflowDataset] = useState("")
    const [outflowDataset, setOutflowDataset] = useState("")
    const [cashDataset, setCashDataset] = useState("")
    const [loaded, setLoaded] = useState(false)


    /* ------------------------ useEffects ----------------------- */

    useEffect(() => {

        const [
            inflows,
            outflows, 
            adjustedCashReserves
        ] = createDatasets(months)

        setInflowDataset(inflows)
        setOutflowDataset(outflows)
        setCashDataset(adjustedCashReserves)
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


    /* ----------------------- FUNCTIONS ----------------------- */

    const createDatasets = (months) => {

        let inflows = []
        let outflows = []
        let monthlyCashReserve = [1000]

        months.forEach(month => {
            const index = monthlyCashReserve.length - 1
            const lastCashReserve = monthlyCashReserve[index]
            const totalInflows = month.totalInflows
            const totalOutflows = month.totalOutflows
            const monthlyCashflow = totalInflows - totalOutflows
            const newCashReserve = lastCashReserve + monthlyCashflow
            inflows.push(month.totalInflows)
            outflows.push(month.totalOutflows)
            monthlyCashReserve.push(newCashReserve)
        })
        let adjustedCashReserves = monthlyCashReserve.slice(1)
        return [inflows, outflows, adjustedCashReserves]
    }

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