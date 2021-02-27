import { moneyBuddyTooltips } from "../../../../../../../modules/moneyBuddyTooltips"
import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"
import { paletteFromTwoColors, backgroundColors} from "./colors"

const { secondary: s } = moneyBuddyTheme.palette

const divideMonthlyFromAnnual = (categoryTotals) => {
    let annuals   = []
    let monthlies = []
    categoryTotals.forEach((category)=> {
        monthlies.push(category[1])
        annuals.push(category[0])
    })
    return [
        monthlies, 
        annuals
    ]
}


const makeMoreColors = (categoryNames) => {
        return backgroundColors.concat(
            paletteFromTwoColors(
                "#1000f5", "#ff770f", 
                (categoryNames.length - backgroundColors.length)
                )
        )
}


const noExpenseData = (monthlies, annuals) => {
    const monthliesTotal = monthlies.reduce((runningTotal, subtotal) => (runningTotal + subtotal), 0)
    const annualsTotal = annuals.reduce((runningTotal, subtotal) => (runningTotal + subtotal), 0)
    return (annualsTotal === 0 && monthliesTotal === 0) 
}

export const createData = (categoryNames, categoryTotals, monthly) => {
    const [monthlies, annuals] = divideMonthlyFromAnnual(categoryTotals)
    const [data, labels] = noExpenseData(monthlies, annuals) ? 
        [[1, 1, 1], Array(3).fill("Add some expenses")] :
        [(monthly ? monthlies : annuals), categoryNames] 

    const needMoreColors = backgroundColors.length < categoryNames.length 
    const backgroundColorData = needMoreColors ? 
        makeMoreColors(backgroundColors) : 
        backgroundColors
    const donutDataObject = {
        labels: labels,
        datasets: [
            {
                backgroundColor: backgroundColorData,
                data: data,
                hoverBackgroundColor: [],
            }
        ]
    }
    return donutDataObject
}


/**
 * @param {integer} fontSize size of legend font compiled to "...px"
 * @param {integer} boxWidth width of colored box compiled to "...px"
 */

const createLegend = (fontSize, boxWidth) => ({
    display: (window.innerWidth > 475),
    align: "right",
    position: "left",
    labels: {
        boxWidth: boxWidth,
        fontSize: fontSize
    }
})


const responsiveLegend = (mq) => {
    let args = [11, 15]
    switch (true) {
        case mq.min_width_1800px:
            args = [24, 40]
            break
        case mq.min_width_1400px:
            args = [18, 40]
            break
        case mq.min_width_1100px:
            args = [14, 25]
            break
        case mq.min_width_887px:
            args = [12, 25]
            break
        case mq.min_width_800px:
            args = [18, 25]
            break
        case mq.min_width_622px:
            args = [14, 15]
            break
        case mq.min_width_515px:
            args = [12, 15]
            break
        default:
    } 
    return createLegend(args[0], args[1])
}


const titleCallback = ({0: item}, {labels}) => `${labels[item.index]}`

const strongerTooltipBorder = () => ({
    borderColor: s.transparent[9],
    borderWidth: 3,

})


export const createOptions = (mediaQueries) => {
    const optionsObject = {
        layout: { padding: { left: 0, right: 0, top: 2, bottom: 6 } },
        legend: {...responsiveLegend(mediaQueries)},
        animation: { animateScale: true },
        tooltips: moneyBuddyTooltips(titleCallback, strongerTooltipBorder),
        responsive: true,
    }
    return optionsObject
}
