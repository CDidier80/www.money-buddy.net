export const labels = [
    'Jan', 
    'Feb', 
    'March',
    'April', 
    'May', 
    'June', 
    'July',
    'Aug', 
    'Sept',
    'Nov',
    'Dec'
]


export const universalProperties = {
    lineTension: 0.1,
    borderCapStyle: 'butt',
    backgroundColor: 'rgba(40,211,236, 0.2)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
}

export const tooltips = {
    callbacks: {
        label:  (tooltipItem, data) => {
            const { datasetIndex } = tooltipItem
            const currentIndex = tooltipItem.index
            const dollars = data.datasets[datasetIndex].data[currentIndex]
            const currencyTooltip = dollars.toLocaleString('en-US', { 
                
                style: 'currency', 
                currency: 'USD',
                maximumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            return currencyTooltip
        }
    }
}