const {
    flowcategories, 
    monthNames, 
    inflows
} = require("./data")


class Month {
    constructor (month, inflows, flowcategories ) {
        this.month = month
        this.inflows = [...inflows]
        this.flowcategories = [...flowcategories]

        this.randomizeFlow = (varianceLimit) => {
            let monthlyVariation = parseInt(varianceLimit * Math.random())
            monthlyVariation *= (Math.random() < .5 ? 1 : -1)
            return monthlyVariation
        }
        /**
         * @param {integer} chance value 0-100 representing chance of outflow occuring 
         * @param {integer} amount the amount of the outflow if it occurs
         */
        this.chanceMajorOutflow = (chance, amount) => {
            return (chance >= Math.random() * 100) ? amount : 0 
        }
                /**
         * @param {integer} chance value 0-100 representing chance of outflow occuring 
         * @param {integer} amount the amount of the outflow if it occurs
         */
        this.randomInvestmentReturn = () => {
            const investmentsGrew = Math.random() < .5 ? true : false
            return investmentsGrew ? parseInt(Math.random() * 500) : 0
        }
    }

    randomizeIncome () {
        let inflowsCopy = [...this.inflows]
        inflowsCopy[0] = {
            source: "Accounting",
            amount: inflowsCopy[0]["amount"] + this.randomizeFlow(300)
        }
        inflowsCopy[2] = {
            source: "Investment Returns",
            amount: inflowsCopy[2]["amount"] + this.randomInvestmentReturn()
        }
        this.inflows = inflowsCopy
    }

    randomizeRentAndUtils () {
        let flowcategoriesCopy = [...this.flowcategories]
        let rentAndUtil = {...flowcategoriesCopy[0]}
        rentAndUtil["outflows"][1] = {
            outflow: "Electricity",
            amount: rentAndUtil["outflows"][1]["amount"] + this.randomizeFlow(25)
        }
        rentAndUtil["outflows"][2] = {
            outflow: "Water",
            amount: rentAndUtil["outflows"][2]["amount"] + this.randomizeFlow(15)
        }
        rentAndUtil["outflows"][4] = {
            outflow: "Gas",
            amount: rentAndUtil["outflows"][4]["amount"] + this.randomizeFlow(15)
        }
        rentAndUtil["outflows"][5] = {
            outflow: "Miscellanious",
            amount: rentAndUtil["outflows"][5]["amount"] + this.randomizeFlow(100)
        }
        return rentAndUtil
    }

    randomizeLiving () {
        let flowcategoriesCopy = [...this.flowcategories]
        let living = {...flowcategoriesCopy[1]}
        living["outflows"][0] = {
            outflow: "Groceries",
            amount: living["outflows"][0]["amount"] + this.randomizeFlow(200)
        }
        living["outflows"][2] = {
            outflow: "Hair Cuts",
            amount: living["outflows"][2]["amount"] + this.randomizeFlow(25)
        }
        living["outflows"][4] = {
            outflow: "Major Home Repair",
            amount: living["outflows"][4]["amount"] + this.chanceMajorOutflow(8, 4000)
        }
        return living
    }

    randomizeVehicle () {
        let flowcategoriesCopy = [...this.flowcategories]
        let vehicle = {...flowcategoriesCopy[3]}
        vehicle["outflows"][0] = {
            outflow: "Gasoline",
            amount: vehicle["outflows"][0]["amount"] + this.randomizeFlow(30)
        }
        vehicle["outflows"][2] = {
            outflow: "repairs",
            amount: vehicle["outflows"][2]["amount"] + this.chanceMajorOutflow(8, 2500)
        }
        return vehicle
    }

    randomizePetcare () {
        let flowcategoriesCopy = [...this.flowcategories]
        let petCare = {...flowcategoriesCopy[4]}
        petCare["outflows"][0] = {
            outflow: "Pet Food",
            amount: petCare["outflows"][0]["amount"] + this.randomizeFlow(60)
        }
        petCare["outflows"][1] = {
            outflow: "Vet Visit",
            amount: petCare["outflows"][1]["amount"] + this.chanceMajorOutflow(8, 700)
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
        const flowcategoriesCopy = [...this.flowcategories]
        return flowcategoriesCopy.reduce((runningTotal, currentFlowcat) => {
            const catCopy = {...currentFlowcat}
            const outflowsCopy = [...catCopy["outflows"]]
            return runningTotal + outflowsCopy.reduce((catTotal, currentOutflow) => {
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


const flowcategoryDeepClone = () => {
    const arrayCopy = flowcategories.map(flowcategory => {
        let outflowsCopy = [...{...flowcategory}["outflows"]].map(outflow => ({...outflow}))
        let outflowsKVpair = {outflows : outflowsCopy}
        const flowcategoryCopy = {
            name: flowcategory["name"],
            ...outflowsKVpair
        }
        return flowcategoryCopy
    })
    return arrayCopy
}



export const generateMonths = () => {
    const generatedMonths = monthNames.map((month, index) => {
        let flowcategoriesCopy = flowcategoryDeepClone()
        let newMonth = new Month(month, [...inflows], [...flowcategoriesCopy])
        newMonth.randomizeIncome()
        newMonth.randomizeOutflows()
        return newMonth
    })

    return generatedMonths
}

