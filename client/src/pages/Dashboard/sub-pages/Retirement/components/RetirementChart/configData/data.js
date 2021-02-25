import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"
const { primary, secondaryDark, secondary } = moneyBuddyTheme.palette

const chartPoints = {
    colors: {
        pointBackgroundColor: primary.main,
        pointBorderColor: secondaryDark.main,
        pointHoverBorderColor: secondary.main,
        pointHoverBackgroundColor: primary.main,
    },
    sizes: {
        pointHoverBorderWidth: 2,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        pointRadius: 2,
    }
}

const chartLine = {
    other: {
        borderDash: [],
        lineTension: 0.2,
        borderDashOffset: 0.0,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
    },
    color: { borderColor: secondary.main },
}

export const universalProperties = {
    backgroundColor: primary.transparent["4"],
    ...chartPoints.colors,
    ...chartPoints.sizes,
    ...chartLine.color,
    ...chartLine.other,
}

export const generateDataSets = (savingsForecast) => (
    [{
            label: "", 
            fill: true,
            data: savingsForecast,
            ...universalProperties,
        }]
)