import { useMediaQuery } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { 
    createData,
    createOptions 
    } from "./modules/donutFunctions"
import "./modules/useResponsiveStyle"
import useResponsiveStyle from './modules/useResponsiveStyle'
import "./styles/donutStyles.css"






const DoughnutChart = (props) => {


    
    // console.log("RERENDERED")

    /* ---------------------------- PROPS ------------------------------ */

    const { categoryNames, categoryTotals} = props.fromBudget

    


    /* ---------------------------- STATE ------------------------------ */
    const [monthly, setMonthly] = useState(false)






    /* ---------------------------- VARIABLES ------------------------------ */


    const DATA = createData(categoryNames, categoryTotals, monthly)

    const mq1 = useMediaQuery('(min-width:1500px)')
    const mq2 = useMediaQuery('(min-width:1000px)')
    const mq3 = useMediaQuery('(min-width:600px)')

    const mediaQueries = {
        min_width_1500px: mq1,
        min_width_1000px: mq2,
        min_width_600px: mq3,
    }

    const options = createOptions(mediaQueries)

    return (
        <div 
        className="gradient-wrapper donut"
        >
            <div 
                className="budget-top-widgets donut"
            >
                <h3 className="donut-header">
                    Distribution of Spending
                </h3>
                <div style={{width:"100%", position: "relative"}}>
                    <Doughnut 
                        data={DATA}
                        options={
                            {...options,
                            tooltips: {        
                                callbacks: {
                                    label:  (tooltipItem, data) => {
                                        const { datasetIndex } = tooltipItem
                                        const dollars = data.datasets[datasetIndex].data.currentIndex
                                        const currencyTooltip = dollars.toLocaleString('en-US', { 
                                            style: 'currency', 
                                            currency: 'USD',
                                            maximumFractionDigits: 2
                                        })
                                        return currencyTooltip
                                    }
                                }
                            }}
                        }
                        maintainAspectRatio={false}
                    />
                </div>
            </div>
        </div>


    )
}

export default DoughnutChart



