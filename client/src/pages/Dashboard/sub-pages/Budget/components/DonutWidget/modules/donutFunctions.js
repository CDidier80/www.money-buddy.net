import { paletteFromTwoColors, backgroundColors} from "./colors"
import {createTooltips} from "./tooltips"


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
                data: monthly ? monthlies : annuals,
                backgroundColor: backgroundColorData,
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
        position: "left",
        align: "right",
        labels: {
            boxWidth: boxWidth,
            fontSize: fontSize
        }
})


const responsiveLegend = (mq) => {
    let args = [12, 25]
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
        case mq.min_width_862px:
            args = [12, 25]
            break
        case mq.min_width_800px:
            args = [18, 25]
            break
        case mq.min_width_600px:
            args = [14, 25]
            break
        default:
            // console.log("default")
    } 
    return createLegend(args[0], args[1])
}


export const createOptions = (mediaQueries) => {
    const optionsObject = {
        legend: {...responsiveLegend(mediaQueries)},
        layout: {
            padding: { left: 0, right: 0, top: 2, bottom: 6 }
        },
        animation: {
            animateScale: true
        },
        responsive: true,
        tooltips: createTooltips(),
    }
    return optionsObject
}
