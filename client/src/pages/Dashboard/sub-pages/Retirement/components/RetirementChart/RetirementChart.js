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

        const {
            clientWidth: subpageWidth, 
            clientHeight: subpageHeight 
        } = props.retirementRef.current
        
        if (subpageWidth < 900 && window.innerHeight > 700){
            setHeight(subpageWidth *.7)
            setWidth(subpageWidth *.95)
        } else {
            setHeight(window.innerHeight * .75)
            setWidth(subpageWidth *.95)
        }
        
        if (window.innerHeight < 700) {
            setHeight(window.innerHeight * .7)
            setWidth(subpageWidth *.85)
        }

        if (window.innerHeight < 500) {
            setHeight(window.innerHeight * .6)
            setWidth(subpageWidth *.85)
        }
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
