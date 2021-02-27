import { moneyBuddyTheme } from "./themeAndStyles"
import { currencyFormat } from "./clientFunctions"
const { primaryDark, secondary } = moneyBuddyTheme.palette

let override = () => {}
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
    borderColor: secondary.transparent["6"],
    backgroundColor: primaryDark.main,
    displayColors: false,
    caretPadding: 13,
    cornerRadius: 6,
    borderWidth: 2,
    caretSize: 9,
    yPadding: 11,
    xPadding: 11,
}

export const moneyBuddyTooltips = (titleCallback, overrideFunction) => {

    
    overrideFunction && (override = overrideFunction)
    
    const makeTooltips = (titleCallback, override) => ({
        ...tooltipStyles,
        ...titleStyles,
        ...bodyStyles,
        ...override(),
        callbacks: {
            label:  (tooltipItem, data) => {
                const { datasetIndex } = tooltipItem
                const currentIndex = tooltipItem.index
                const dollars = data.datasets[datasetIndex].data[currentIndex]
                return currencyFormat(dollars)
            },
            title: (tooltipItem, data) =>  titleCallback(tooltipItem, data)
        }
    })
    
    return makeTooltips(titleCallback, override)
}