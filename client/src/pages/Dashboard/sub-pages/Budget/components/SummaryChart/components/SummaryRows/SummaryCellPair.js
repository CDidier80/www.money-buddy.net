import SummaryCell from "./SummaryCell"
import React from 'react'

const SummaryCellPair = (props) => {

    const {
        cellOneClass,
        cellTwoClass,
        cellOneContent,
        cellTwoContent,
    } = props


    const cellOneProps = {
        align: "justify",
        h5Content: cellOneContent,
        h5ClassName: cellOneClass,
    }

    const cellTwoProps = {
        align: "right",
        h5Content: cellTwoContent,
        h5ClassName: cellTwoClass,
    }


    return (
        <>
            <SummaryCell {...cellOneProps} />
            <SummaryCell {...cellTwoProps} />
        </>
    )
}

export default SummaryCellPair
