const axesStyle = {
    fontFamily: "Roboto",
    fontStyle: 'Bold',
    fontColor: "black",
    fontSize: 14,
    padding: 5
}

export const generateScales = (toCurrency, yAxisCallback) => (
    
    {
    yAxes: [{
        ticks: {
            callback: (value) => toCurrency(value),
            ...axesStyle
        },
    }],
    xAxes: [{
        gridLines: {
            display: false
        },
        ticks: {
            autoSkip: false,
            callback: ( value, index, values ) => {
                // console.log(value)
                return yAxisCallback( value, index, values )
            },
            ...axesStyle,
        },
    }],
})