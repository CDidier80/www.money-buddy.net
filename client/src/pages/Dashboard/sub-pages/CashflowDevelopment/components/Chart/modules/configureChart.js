import { moneyBuddyTooltips } from "../../../../../../../modules/moneyBuddyTooltips"
import { makeCashflowDataset } from "./makeCashflowDataset"
import { cashflowTooltips } from "./cashflowTooltips"
import { configureAxes } from "./configureAxes"

const titleCallback = (tooltipItem) => {
    const {label, datasetIndex} = tooltipItem[0]
    if (datasetIndex === 0) return `${label} Inflows:`
    if (datasetIndex === 1) return `${label} Outflows:`
    if (datasetIndex === 2) return `${label} - Net Cashflow:`
}

export const configureChart = ({inflowDataset, outflowDataset, cashDataset}) => {

    const labels = [ 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec' ]
    const cashAvailableSet = makeCashflowDataset("Cash Available", cashDataset)
    const outflowsSet = makeCashflowDataset("Outflows", outflowDataset)
    const inflowsSet = makeCashflowDataset("Inflows", inflowDataset)

    return {
         chartData: {
            labels : [...labels],
            datasets: [
                inflowsSet,
                outflowsSet,
                cashAvailableSet,
            ]
        },
        options: {
            tooltips: moneyBuddyTooltips(titleCallback),
            scales: configureAxes()
        }
    }

}
