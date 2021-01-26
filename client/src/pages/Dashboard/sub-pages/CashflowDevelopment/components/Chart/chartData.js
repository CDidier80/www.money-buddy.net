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
    pointRadius: 1,
    borderDash: [],
    lineTension: 0.1,
    pointHitRadius: 10,
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    borderDashOffset: 0.0,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointHoverBorderWidth: 2,
    pointBackgroundColor: '#fff',
    pointBorderColor: 'rgba(75,192,192,1)',
    backgroundColor: 'rgba(40,211,236, 0.2)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
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


const axesStyle = {
    fontFamily: "Roboto",
    fontStyle: 'Bold',
    fontColor: "black",
    fontSize: 13,
    padding: 5
}

export const configureAxes = (toCurrency) => ({
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