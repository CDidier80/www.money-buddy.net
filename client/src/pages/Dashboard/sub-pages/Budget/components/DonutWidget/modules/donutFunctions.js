import { paletteFromTwoColors, backgroundColors} from "./colors"




const divideMonthlyFromAnnual = (categoryTotals) => {
    let monthlies = []
    let annuals = []
    categoryTotals.forEach((category)=> {
        monthlies.push(category[1])
        annuals.push(category[0])
    })
    return [monthlies, annuals]
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
    const backgroundColorData = needMoreColors ? makeMoreColors(backgroundColors) : backgroundColors
    
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


const createLegend = (fontSize, boxWidth) => ({
        position: "left",
        align: "right",
        labels: {
            boxWidth: boxWidth,
            fontSize: fontSize
        }
})

const responsiveLegend = (mq) => {
    let args= [12, 25]
    console.log(mq.min_width_1500px)
    switch (true) {
        case mq.min_width_600px:
            args = [10, 25]
        case mq.min_width_1000px:
            args = [30, 25]
        case mq.min_width_1500px:
            console.log("big")
            args = [50, 40]
        default:
            (()=>null)()
    } 
    console.log(args)
    return createLegend(args[0], args[1])
}

export const createOptions = (mediaQueries) => {
    const optionsObject = {
        legend: {...responsiveLegend(mediaQueries)},
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 2,
                bottom: 6
            }
        },
        animation: {
            animateScale: true
        },
        responsive: true
    }
    return optionsObject
}
