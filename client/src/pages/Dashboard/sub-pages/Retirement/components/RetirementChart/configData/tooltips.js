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
                maximumFractionDigits: 0,
                maximumFractionDigits: 0,
                style: 'currency', 
                currency: 'USD',
            })
            return currencyTooltip
        },
        title: (tooltipItem, data) => `Age: ${tooltipItem[0]["label"]}`
    }
}