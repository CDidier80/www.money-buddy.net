import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"
const {
    primary, 
    secondary, 
    secondaryBright, 
    secondaryMedium, 
} = moneyBuddyTheme.palette



export const universalProperties = {
    pointRadius: 4,
    borderDash: [],
    lineTension: 0.1,
    pointHitRadius: 10,
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    borderDashOffset: 0.0,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointHoverBorderWidth: 2,
}

const setLineColors = (color) => {
    return {
        pointBorderColor: color,
        pointBackgroundColor: color,
        pointHoverBorderColor: color,
        pointHoverBackgroundColor: color,
    }
}


const inflowsDataProps = {
    fill: false,
    label: 'Inflows',
    borderColor: primary.main,
    ...setLineColors(secondary.main),
}

const outflowsDataProps = {
    fill: false,
    label: "Outflows",
    ...setLineColors(primary.main),
    borderColor: secondaryMedium.main,

}

const cashDataProps = {
    fill: true,
    label: 'Cash Available',
    pointBorderColor: secondary.main,
    pointBackgroundColor: primary.main,
    pointHoverBorderColor: secondary.main,
    backgroundColor: primary.transparent[4],
    pointHoverBackgroundColor: primary.main,
    borderColor: secondaryBright.transparent[7],
}


export const makeCashflowDataset = (lineType, dataSet) => {

    let lineProperties 
    if (lineType === "Cash Available") (lineProperties = cashDataProps)
    if (lineType === "Inflows")        (lineProperties = inflowsDataProps)
    if (lineType === "Outflows")       (lineProperties = outflowsDataProps)
    
    lineProperties.data = dataSet
    for (let key in universalProperties) {
        lineProperties[key] = universalProperties[key]
    }

    return lineProperties
}







