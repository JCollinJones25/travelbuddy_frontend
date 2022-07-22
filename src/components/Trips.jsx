import { useState, useEffect } from 'react'

const Trips = (props) => {

    const [data, setData] = useState(null)

    const URL = "http://localhost:4000/trips"

    const getData = async () => {
        const response = await fetch(URL)
        const Data = await response.json()
        setData(Data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="trips">
        <h3>Trips</h3>
        {" "}
        <table className="table text-center">
            <thread>
                <tr>
                    <th>Trip</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thread>
        </table>
        </div>
    )
}

export default Trips