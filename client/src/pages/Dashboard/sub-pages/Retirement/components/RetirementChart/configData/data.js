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

export const generateDataSets = (savingsForecast) => (
    [
        {
            label: "", 
            fill: true,
            data: savingsForecast,
            ...universalProperties,
            borderColor: 'rgba(10,102,102,.7)',
        }
    ]
)