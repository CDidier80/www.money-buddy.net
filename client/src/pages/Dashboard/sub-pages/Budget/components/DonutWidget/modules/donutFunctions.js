import { paletteFromTwoColors, backgroundColors} from "./colors"
import { createTooltips } from "./tooltips"


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


export const createData = (categoryNames, categoryTotals, monthly) => {
    const [monthlies, annuals] = divideMonthlyFromAnnual(categoryTotals)
    const needMoreColors = (backgroundColors.length < categoryNames.length )
    const backgroundColorData = needMoreColors ? 
                                makeMoreColors(backgroundColors) : 
                                backgroundColors
    const donutDataObject = {
        labels: categoryNames,
        datasets: [
                {
                    backgroundColor: backgroundColorData,
                data: monthly ? monthlies : annuals,
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


export const createOptions = (mediaQueries) => {
    const optionsObject = {
        layout: { padding: { left: 0, right: 0, top: 2, bottom: 6 } },
        legend: {...responsiveLegend(mediaQueries)},
        animation: { animateScale: true },
        tooltips: createTooltips(),
        responsive: true,
    }
    return optionsObject
}
