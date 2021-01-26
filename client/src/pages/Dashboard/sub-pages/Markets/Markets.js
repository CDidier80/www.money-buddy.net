import  {GetAllSymbols } from "../../../../Services/MarketsService"
import PageHeader from "./components/PageHeader"
import React, { useEffect, useState } from 'react'

const Markets = (props) => {

    const [data, setData] = useState("")

    useEffect(() => {
        let componentMounted = true
        const fetchFromFinnhub = async () => {
            const response = await GetAllSymbols()
            console.log(response)
            if (componentMounted) {
                setData(response)
            }
        }
        fetchFromFinnhub()
        return () => {
            componentMounted = false
        }
    }, [])

    return (
        <div className="markets">
            <PageHeader 
            />
            {/* <div className="top-flex">
                <Summary
                    {...props}
                />
            </div> */}
        </div>
    )
}

export default Markets
