import { createData, createOptions } from "./modules/donutFunctions"
import { useMediaQuery } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import "./modules/useResponsiveStyle"
import "./styles/donutStyles.css"
import React, { 
    useLayoutEffect, 
    useEffect, 
    useState, 
    useRef 
} from 'react'




const DoughnutChart = (props) => {

    /* ---------------------- init MEDIA QUERIES ----------------------- */

    const mq1 = useMediaQuery('(min-width:1400px)')
    const mq2 = useMediaQuery('(min-width:1100px)')
    const mq5 = useMediaQuery('(min-width:862px)' )
    const mq3 = useMediaQuery('(min-width:800px)' )
    const mq4 = useMediaQuery('(min-width:600px)' )
    const mq6 = useMediaQuery('(min-width:1800px)')

    const mq1Ref = useRef("")
    const mq2Ref = useRef("")
    const mq3Ref = useRef("")
    const mq4Ref = useRef("")
    const mq5Ref = useRef("")
    const mq6Ref = useRef("")

    useEffect(() => {
        mq1Ref.current = mq1
        mq2Ref.current = mq2
        mq3Ref.current = mq3
        mq4Ref.current = mq4
        mq5Ref.current = mq5
        mq6Ref.current = mq6
    })

    /* ------------------------- Listen to Window Size ------------------------ */

    // const [height, setHeight] = useState(window.innerHeight / 2)
    // const [width, setWidth] = useState(window.innerWidth - 200)

    // const setChartWrapperSize = (e) => {
    //     setHeight(window.innerHeight / 2)
    //     setWidth(window.innerWidth - 200)
    // }
    
    // useLayoutEffect(() => {
    //     window.addEventListener("resize", setChartWrapperSize)
    //     return () => window.removeEventListener("resize", setChartWrapperSize)
    // }, [])
    /* ---------------------------- PROPS ------------------------------ */

    const { categoryNames, categoryTotals} = props.fromBudget


    /* ---------------------------- STATE ------------------------------ */

    const [monthly, setMonthly] = useState(false)

    const DATA = createData(categoryNames, categoryTotals, monthly)

    const queryRefs = {
        min_width_1800px: mq6Ref.current,
        min_width_1400px: mq1Ref.current,
        min_width_1100px: mq2Ref.current,
        min_width_862px:  mq5Ref.current,
        min_width_800px:  mq3Ref.current,
        min_width_600px:  mq4Ref.current
    }

    return ( 
        <div 
            className="gradient-wrapper donut"
        >
            <div 
                className="budget-top-widgets donut"
            >
                <h3 className="donut-header">
                    Distribution of Spending
                </h3>
                <div>
                    <Doughnut 
                        data={DATA}
                        maintainAspectRatio={false}
                        options={createOptions(queryRefs)}
                    />
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart



