import { currencyChartCallback } from "../../../../../../../modules/clientFunctions"
const { callback: toCurrency } = currencyChartCallback

const axesStyle = {
    fontFamily: "Roboto",
    fontStyle: 'Bold',
    fontColor: "black",
    fontSize: 13,
    padding: 5
}

export const configureAxes = () => ({
    yAxes: [{
        ticks: { 
            callback: (value) => toCurrency(value),
            ...axesStyle,
        },
    }],
    xAxes: [{
        ticks: { ...axesStyle },
    }],
})