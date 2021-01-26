export const universalProperties = {
    pointRadius: 2,
    borderDash: [],
    lineTension: 0.2,
    pointHitRadius: 10,
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    borderDashOffset: 0.0,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointHoverBorderWidth: 2,
    pointBorderColor: 'black',
    pointBackgroundColor: 'white',
    pointHoverBorderColor: '#0a6666',
    pointHoverBackgroundColor: '#fdbb2d',
    backgroundColor: "rgba(232, 184, 30, .35)",
}

// for "Age xx" on tooltips
const titleStyles = {
    titleMarginBottom: 8,
    titleAlign: "center",
    titleFontSize: 14,
}

// for "$XXX" on tooltips
const bodyStyles = {
    bodyAlign: "center",
    bodyFontSize: 14,
}

// for tooltip entity
const tooltipStyles = {
    backgroundColor: "#0a6666",
    borderColor: "#ffd781",
    displayColors: false,
    caretPadding: 13,
    cornerRadius: 6,
    borderWidth: 2,
    caretSize: 9,
    yPadding: 11,
    xPadding: 11,
}

export const tooltips = {
    ...tooltipStyles,
    ...titleStyles,
    ...bodyStyles,
    callbacks: {
        label:  (tooltipItem, data) => {
            const { datasetIndex } = tooltipItem
            const currentIndex = tooltipItem.index
            const dollars = data.datasets[datasetIndex].data[currentIndex]
            const currencyTooltip = dollars.toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD',
                maximumFractionDigits: 0,
                maximumFractionDigits: 0
            })
            return currencyTooltip
        },
        title: (tooltipItem, data) => {
            console.log(tooltipItem)
            return `Age: ${tooltipItem[0]["label"]}`
    }}
}