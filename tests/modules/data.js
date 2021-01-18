const monthNames =   [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]      

const inflows = [
    {
        source: 'Accounting',
        amount: 4500
    },
    {
        source: 'School Teaching',
        amount: 2700
    },
    {
        source: 'Investment Returns',
        amount: 0
    },
]


const rentAndUtilities= [
    {
        outflow: "Rent",
        amount: 2200
    },
    {
        outflow: "Electricity",
        amount: 120
    },
    {
        outflow: "Water",
        amount: 50
    },
    {
        outflow: "Internet",
        amount: 110
    },
    {
        outflow: "Gas",
        amount: 30
    },
    {
        outflow: "Miscellanious",
        amount: 100
    },
]


const livingExpenses= [
    {
        outflow: "Groceries",
        amount: 650
    },
    {
        outflow: "Phone Bill",
        amount: 150
    },
    {
        outflow: "Hair Cuts",
        amount: 50
    },
    {
        outflow: "Clothing",
        amount: 50
    },
    {
        outflow: "Major Home Repair",
        amount: 0
    }
]


const medicalWellness= [
    {
        outflow: "Perscriptions",
        amount: 100
    },

]


const vehicle = [
    {
        outflow: "Gasoline",
        amount: 120
    },
    {
        outflow: "Car Insurance",
        amount: 120
    },
    {
        outflow: "repairs",
        amount: 0
    },
    
]

const petCare = [
    {
        outflow: "Pet Food",
        amount: 300
    },
    {
        outflow: "Vet Visit",
        amount: 0
    },
    {
        outflow: "Toys",
        amount: 20
    },
]

const debt = [
    {
        outflow: "Student Loans",
        amount: 400
    },

]

const taxes = [
    {
        outflow: "Federal Income Tax",
        amount: 1666,
    },
    {
        outflow: "State Income Tax",
        amount: 416
    }
]


const flowcategories = [
    rentAndUtilities,
    livingExpenses,
    medicalWellness,
    vehicle,
    petCare,
    debt,
    taxes 
]

module.exports = {
    flowcategories,
    monthNames,
    inflows
}