import { fiveYearTicks, makeXAxisAgeLabels } from "./components/functionModules/configFunctions"
import { calculateSavingsForecast } from "./components/functionModules/totalSavings"
import { generateScales } from "./configData/axesAndTicks"
import React, { useState, useLayoutEffect } from 'react'
import {generateDataSets} from "./configData/data"
import { tooltips } from "./configData/tooltips"
import LineChart from "./components/LineChart"

const ChartLogic = props => {

    const { 
        endingAge, 
        currentAge, 
        lifespanAge, 
    } = props.fromRetirement

    const { callback: toCurrency } = props.currencyChartCallback
    const savingsForecast = calculateSavingsForecast({...props.fromRetirement})

    const calcChartWrapperHeight = () => window.innerWidth < 700 ? 
        window.innerWidth * .75 :
        window.innerWidth - 300
    

    const [height, setHeight] = useState(()=>calcChartWrapperHeight())

    const updateHeight = () => setHeight(calcChartWrapperHeight())

    useLayoutEffect(() => {
        window.addEventListener("resize", updateHeight)
        return () => window.removeEventListener("resize", updateHeight)
    }, [])
    

    return (
        <div
            style={{
                width: "90%",
                height: height,
                margin: "0 auto",
                minWidth: "270px",
                minHeight: "275px",
                position: "relative",
                maxHeight: window.innerHeight * .42
            }}
        >
            <LineChart {...{
                data: {
                    labels: makeXAxisAgeLabels(lifespanAge, currentAge, endingAge),
                    datasets: generateDataSets(savingsForecast)
                },
                options: {
                    scales: generateScales(toCurrency, fiveYearTicks),
                    maintainAspectRatio: false,
                    legend: { display: false },
                    tooltips: tooltips,
                    responsive: true,
                }
            }} />
        </div>
    )
}

export default ChartLogic
