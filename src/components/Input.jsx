import { useState } from "react"

const Input = (props) => {

const [trip, setTrip] = useState({
    location: "",
    hotel: "",
    flights: "",
    days: "",
    nights: "",
    activities: "",
    reservations: ""
})

const URL = "http://localhost:4000/trips/new"

const handleSubmit = async (e) => {
    e.preventDefault()   
    try {
    const body = { 
        location: trip.location,
        hotel: trip.location,
        flights: trip.location,
        days: trip.days,
        nights: trip.nights,
        activities: trip.activities,
        reservations: trip.reservations
     }
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    console.log(response)
    } catch (err) {
        console.error(err.message)
    }
}

const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    setTrip({location: value})
    setTrip({hotel: value})
    setTrip({flights: value})
    setTrip({days: value})
    setTrip({nights: value})
    setTrip({activities: value})
    setTrip({reservations: value})
}

    return (
       
        <div className="text-center mt-5">
            <h3>Add an upcoming trip</h3>
            <form className="m-5" onSubmit={handleSubmit}>
                <p>City, State</p>
                <input type="text" className="form-control mb-3" value={trip.location} onChange={handleChange}/>
                <p>Hotel(s)</p>
                <input type="text" className="form-control mb-3" value={trip.hotel} onChange={handleChange}/>
                <p>Flight(s)</p>
                <input type="text" className="form-control mb-3" value={trip.flights} onChange={handleChange}/>
                <p>Days</p>
                <input type="text" className="form-control mb-3" value={trip.days} onChange={handleChange}/>
                <p>Nights</p>
                <input type="text" className="form-control mb-3" value={trip.nights} onChange={handleChange}/>
                <p>Activities</p>
                <input type="text" className="form-control mb-3" value={trip.activities} onChange={handleChange}/>
                <p>Reservations</p>
                <input type="text" className="form-control mb-3" value={trip.reservations} onChange={handleChange}/>
                <button className="btn btn-sucess">Add</button>
                </form>
        </div>
    )
}

export default Input