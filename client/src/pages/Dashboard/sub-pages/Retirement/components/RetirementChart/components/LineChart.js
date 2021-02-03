import { Line, Chart } from 'react-chartjs-2'
import React, { useEffect, useRef } from 'react'

const LineChart = ({data, options}) => {

    // console.log("rendered")
    // const chartRef = useRef()

    // useEffect(() => {
    //     Chart.pluginService.register({
    //         afterDraw: function(chart, easing) {
    //           if (chart.tooltip._active && chart.tooltip._active.length) {
    //             const activePoint = chart.controller.tooltip._active[0];
    //             const ctx = chart.ctx;
    //             const x = activePoint.tooltipPosition().x;
    //             const topY = chart.scales['y-axis-0'].top;
    //             const bottomY = chart.scales['y-axis-0'].bottom;
      
    //             ctx.save();
    //             ctx.beginPath();
    //             ctx.moveTo(x, topY);
    //             ctx.lineTo(x, bottomY);
    //             ctx.lineWidth = 2;
    //             ctx.strokeStyle = '#e23fa9';
    //             ctx.stroke();
    //             ctx.restore();
    //           }}})
    // }, [chartRef])

    return (
        <Line 
            // ref={chartRef}
            data={data}
            options={options}
        />
    )
}

export default LineChart

