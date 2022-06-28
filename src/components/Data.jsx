import { useState, useEffect } from 'react'

const Data = (props) => {

    const [data, setData] = useState(null)

    const getData = async () => {
        const response = await fetch(props.URL)
        const Data = await response.json()
        setData(Data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(props.URL)

    return (
        <>
        <h3>data component</h3>
        </>
    )
}

export default Data