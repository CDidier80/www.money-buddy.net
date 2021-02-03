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


export const createTooltips = () => ({     
    ...tooltipStyles,
    ...titleStyles,
    ...bodyStyles,   
    callbacks: {
        label:  (tooltipItem, data) => {
            const { datasetIndex, index} = tooltipItem
            const dollarsArray = data.datasets[datasetIndex].data
            const thisDollars = dollarsArray[index]
            let currencyTooltip
            if (typeof thisDollars !== "undefined"){
                currencyTooltip = thisDollars.toLocaleString('en-US', { 
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                    style: 'currency', 
                    currency: 'USD',
                })
            }
            return currencyTooltip
        },
        title: (tooltipItem, data) => {
            const currentIndex = tooltipItem[0]["index"]
            const category = data.labels[currentIndex]
            return `${category}`
        }
    }
})