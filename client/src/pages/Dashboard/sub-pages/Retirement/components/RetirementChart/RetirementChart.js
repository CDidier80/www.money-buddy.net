import { calculateSavingsForecast } from "./components/functionModules/totalSavings"
import { generateScales } from "./configData/axesAndTicks"
import {generateDataSets} from "./configData/data"
import { tooltips } from "./configData/tooltips"
import LineChart from "./components/LineChart"
import React from 'react'
import { 
    fiveYearTicks, 
    makeXAxisAgeLabels 
} from "./components/functionModules/configFunctions"



const ChartLogic = (props) => {


    /* ----------------------------- PROPS ----------------------------- */

    const { callback: toCurrency } = props.fromApp.currencyChartCallback
    const { lifeSpanAge, currentAge, endingAge } = props.fromRetirement
    const savingsForecast = calculateSavingsForecast({...props.fromRetirement})



    /* ---------------------- ASSEMBLE CHART PROPS ---------------------- */
    const chartData = {
        labels: makeXAxisAgeLabels(lifeSpanAge, currentAge, endingAge),
        datasets: generateDataSets(savingsForecast)
    }

    const options = {
        legend: { display: false },
        scales: generateScales(toCurrency, fiveYearTicks),
        tooltips: tooltips
    }

    return (
        <div>
            <LineChart 
                data={chartData}
                options={options}
            />
        </div>
    )
}

export default ChartLogic
