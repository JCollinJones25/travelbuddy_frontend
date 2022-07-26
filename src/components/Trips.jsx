import { useState, useEffect } from 'react'

const Trips = (props) => {

    const [trips, setTrips] = useState([])

    const URL = "http://localhost:4000/trips"

    const getTrips = async () => {
        try {
            const response = await fetch(URL)
            const result = await response.json()
            setTrips(result)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTrips()
    }, [])

    console.log(trips)

    return (
        <div className="trips">
        <h3>Trips</h3>
        {" "}
        <table className="table text-center">
            <tbody>
                {trips.map(trip => (
                    <tr>
                        <td>{trip.location}</td>
                        <td>{trip.hotel}</td>
                        <td>{trip.flights}</td>
                        <td>{trip.days}</td>
                        <td>{trip.nights}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Trips