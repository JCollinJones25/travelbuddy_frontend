import { useState, useEffect } from 'react'
import Edit from "./Edit"

const Trips = () => {

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

    const deleteTrip = async (id) => {
        try {
            const deleteTrip = await fetch(`${URL}/${id}`, {
                method: "DELETE"
            })
            setTrips(trips.filter(trip => trip.id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className="trips">
        <h3>Trips</h3>
        {" "}
        <table className="table text-center">
            <tbody>
                {trips.map(trip => (
                    <tr key={trip.id}>
                        <td>{trip.location}</td>
                        <td>{trip.hotel}</td>
                        <td>{trip.flights}</td>
                        <td>{trip.days}</td>
                        <td>{trip.nights}</td>
                        <td><Edit trip={trips} URL={URL}/></td>
                        <button className="btn btn-danger m-3" onClick={() => deleteTrip(trip.id)}>Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Trips