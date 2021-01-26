import { calculateSavingsForecast } from "./components/functionModules/totalSavings"
import { universalProperties, tooltips } from "./components/data"
import LineChart from "./components/LineChart"
import React from 'react'
import { fiveYearTicks, makeXAxisAgeLabels } from "./components/functionModules/configFunctions"

const ChartLogic = (props) => {

    const { callback: toCurrency } = props.fromApp.currencyChartCallback
    const { lifeSpanAge, currentAge, endingAge } = props.fromRetirement
    const savingsForecast = calculateSavingsForecast({...props.fromRetirement})



    const chartData = {
        labels: makeXAxisAgeLabels(lifeSpanAge, currentAge, endingAge),
        datasets: [
            {
                label: "", 
                fill: true,
                data: savingsForecast,
                ...universalProperties,
                borderColor: 'rgba(10,102,102,.7)',
            }
        ]
    }

    const axesStyle = {
        fontFamily: "Roboto",
        fontStyle: 'Bold',
        fontColor: "black",
        fontSize: 14,
        padding: 5
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: (value) => toCurrency(value),
                    ...axesStyle
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    callback: ( value, index, values ) => {
                        return fiveYearTicks( value, index, values )
                    },
                    ...axesStyle,
                    
                },
            }],
        },
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
