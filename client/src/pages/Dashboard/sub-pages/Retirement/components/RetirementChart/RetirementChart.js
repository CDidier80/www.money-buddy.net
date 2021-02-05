import { fiveYearTicks, makeXAxisAgeLabels } from "./components/functionModules/configFunctions"
import { calculateSavingsForecast } from "./components/functionModules/totalSavings"
import { generateScales } from "./configData/axesAndTicks"
import React, { useState, useLayoutEffect } from 'react'
import {generateDataSets} from "./configData/data"
import { tooltips } from "./configData/tooltips"
import LineChart from "./components/LineChart"


const ChartLogic = (props) => {

    /* -------------------------------- PROPS -------------------------------- */

    const { 
        endingAge, 
        currentAge, 
        lifespanAge, 
    } = props.fromRetirement
    const { callback: toCurrency } = props.fromApp.currencyChartCallback
    const savingsForecast = calculateSavingsForecast({...props.fromRetirement})


    /* ------------------------- Listen to Window Size ------------------------ */

    const [height, setHeight] = useState(window.innerHeight / 2)
    const [width, setWidth] = useState(window.innerWidth - 200)

    const setChartWrapperSize = (e) => {
        setHeight(window.innerHeight / 2)
        setWidth(window.innerWidth - 200)
    }
    
    useLayoutEffect(() => {
        window.addEventListener("resize", setChartWrapperSize)
        return () => window.removeEventListener("resize", setChartWrapperSize)
    }, [])
    

    /* ---------------------- CREATE CHART CONFIGURATION ---------------------- */

    const chartData = {
        labels: makeXAxisAgeLabels(lifespanAge, currentAge, endingAge),
        datasets: generateDataSets(savingsForecast)
    }

    const options = {
        scales: generateScales(toCurrency, fiveYearTicks),
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: tooltips,
        responsive: true,
    }

    /* ------------------ JSX ------------------ */

    return (
        <div 
            className="retirement-chart-wrapper"
            style={{
                height: height,
                width: width,
            }}
        >
            <LineChart 
                options={options}
                data={chartData}
            />
        </div>
    )
}

export default ChartLogic
