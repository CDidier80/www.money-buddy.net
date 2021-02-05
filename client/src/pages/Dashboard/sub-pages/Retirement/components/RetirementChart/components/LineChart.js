import { Line } from 'react-chartjs-2'
import React from 'react'

const LineChart = ({data, options}) => {

    return (
        <Line 
            data={data}
            options={options}
        />
    )
}

export default LineChart

