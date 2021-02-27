export const cashflowTooltips = {
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
        }
    }
}