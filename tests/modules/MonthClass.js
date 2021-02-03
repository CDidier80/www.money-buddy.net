const {flowcategories, monthNames, inflows} = require("./data")


class Month {
    constructor (month, inflows, flowcategories ) {
        this.month = month
        this.inflows = [...inflows],
        this.flowcategories = [...flowcategories]
        this.randomizeFlow = (varianceLimit) => {
            let monthlyVariation = parseInt(varianceLimit * Math.random())
            monthlyVariation *= (Math.random() < .5 ? 1 : -1)
            return monthlyVariation
        }
    }

    randomizeAccountingIncome () {
        let inflowsCopy = [...this.inflows]
        inflowsCopy[0] = {
            source: "Accounting",
            amount: inflowsCopy[0]["amount"] + this.randomizeFlow(300)
        },
        inflowsCopy[2] = {
            source: "Accounting",
            amount: inflowsCopy[2]["amount"] + this.randomizeFlow(300)
        }
        this.inflows = inflowsCopy
    }

    randomizeRentAndUtils () {
        let flowcategoriesCopy = [...this.flowcategories]
        let rentAndUtil = [...flowcategoriesCopy[0]]
        rentAndUtil[1] = {
            outflow: "Electricity",
            amount: rentAndUtil[1]["amount"] + this.randomizeFlow(25)
        },
        rentAndUtil[2] = {
            outflow: "Water",
            amount: rentAndUtil[2]["amount"] + this.randomizeFlow(15)
        },
        rentAndUtil[4] = {
            outflow: "Gas",
            amount: rentAndUtil[4]["amount"] + this.randomizeFlow(15)
        },
        rentAndUtil[5] = {
            outflow: "Miscellanious",
            amount: rentAndUtil[5]["amount"] + this.randomizeFlow(100)
        }
        return rentAndUtil
    }

    randomizeLiving () {
        let flowcategoriesCopy = [...this.flowcategories]
        let living = [...flowcategoriesCopy[1]]
        living[0] = {
            outflow: "Groceries",
            amount: living[0]["amount"] + this.randomizeFlow(200)
        },
        living[3] = {
            outflow: "Hair Cuts",
            amount: living[3]["amount"] + this.randomizeFlow(25)
        }
        return living
    }

    randomizeVehicle () {
        let flowcategoriesCopy = [...this.flowcategories]
        let vehicle = [...flowcategoriesCopy[3]]
        vehicle[1] = {
            outflow: "Gasoline",
            amount: vehicle[1]["amount"] + this.randomizeFlow(30)
        }
        return vehicle
    }

    randomizePetcare () {
        let flowcategoriesCopy = [...this.flowcategories]
        let petCare = [...flowcategoriesCopy[4]]
        petCare[0] = {
            outflow: "Pet Food",
            amount: petCare[0]["amount"] + this.randomizeFlow(60)
        }
        return petCare
    }

    randomizeOutflows () {
        let flowcategoriesCopy = [...this.flowcategories]
        flowcategoriesCopy[0] = this.randomizeRentAndUtils()
        flowcategoriesCopy[1] = this.randomizeLiving()
        flowcategoriesCopy[3] = this.randomizeVehicle()
        flowcategoriesCopy[4] = this.randomizePetcare()
        this.flowcategories = [...flowcategoriesCopy]
    }

    get totalInflows () {
        return this.inflows.reduce((runningTotal, currentInflow )=> {
            return runningTotal + currentInflow.amount
        }, 0)
    }

    get totalOutflows () {
        return this.flowcategories.reduce((runningTotal, currentFlowcat ) => {
            return runningTotal + currentFlowcat.reduce((catTotal, currentOutflow) => {
                return catTotal += currentOutflow.amount
            }, 0)
        }, 0)
    }

    get netCashflow () {
        const totalInflow = this.totalInflows()
        const totalOutflow = this.totalOutflows()
        return totalInflow - totalOutflow
    }
}

const generatedMonths = monthNames.map(month => {
    let newMonth = new Month(month, [...inflows], [...flowcategories])
    newMonth.randomizeAccountingIncome()
    newMonth.randomizeOutflows()
    return newMonth
})


// newMonths.forEach((month, index )=> {
//     console.log(month.flowcategories[1])
// })

const jan = generatedMonths[0]

console.log(jan.totalInflows)
console.log(jan.totalOutflows)
// console.log(generatedMonths[0].totalInflows())