import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { paletteFromTwoColors} from "./modules/colorsFunctions"



const DoughnutChart = (props) => {

    {/* PROPS */}
    const { categoryNames, categoryTotals } = props


    {/* STATE */}

    const [monthly, setMonthly] = useState(false)


    {/* FUNCTIONS */}


    {/* VARIABLES */}

    let monthlies = []
    let annuals = []

    categoryTotals.forEach((category)=> {
        monthlies.push(category[1])
        annuals.push(category[0])
    })


    let hoverBackgroundColor = []

    // let backgroundColor = paletteFromTwoColors("#22c1c3", "#fdbb2d", categoryNames.length)

    let backgroundColor = [
        "#22c1c3",
        "#fdbb2d", 
        "#c746ce",
        "#48ce46",
        "#428bff",
        "#e60067",
        "#027500",
        "#ffe342",
        "#a2de4f",
        "#6f68fd",
        "#fd6868",
        "#b17902",
        "#69bb85",
        "#a5b650",
    ]

    if (backgroundColor.length < categoryNames.length) {
        backgroundColor.concat(paletteFromTwoColors("#1000f5", "#ff770f", (categoryNames.length - backgroundColor.length)))
    }

    const DATA = {
        labels: categoryNames,
        datasets: [
                {
                data: monthly ? monthlies : annuals,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: hoverBackgroundColor,
            }
        ]
    }

    const options = {
        legend :{
            position: "left", 
            align: "right"
        },
        tooltips: {        
            callbacks: {
                label:  (tooltipItem, data) => {
                    // console.log("tooltipItem:", tooltipItem)
                    // console.log("data:", data)

                    const { datasetIndex } = tooltipItem

                    const currentIndex = tooltipItem.index
                    const dollars = data.datasets[datasetIndex].data[currentIndex]
                    const currencyTooltip = dollars.toLocaleString('en-US', { 
                        
                        style: 'currency', 
                        currency: 'USD',
                        maximumFractionDigits: 2
                    })
                    return currencyTooltip
                }
            }
        }
        
    }

    
    return (
        <Doughnut 
            data={DATA}
            options={options}
        />
    )
}

export default DoughnutChart



