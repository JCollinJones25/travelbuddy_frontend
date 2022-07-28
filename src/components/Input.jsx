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
        hotel: trip.hotel,
        flights: trip.flights,
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
    window.location = "/"
    } catch (err) {
        console.error(err.message)
    }
}

const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setTrip({
        ...trip,
        [name]: value,
    })
}

    return (
       
        <div className="add">
            <h3>Add an upcoming trip</h3>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div className="form">

                <div className="first-half">
                    <p>City, State</p>
                    <input type="text" className="input form-control" value={trip.location} name="location" onChange={handleChange}/>
                    <p>Hotel(s)</p>
                    <input type="text" className="input form-control" value={trip.hotel} name="hotel" onChange={handleChange}/>
                    <p>Flight(s)</p>
                    <input type="text" className="input form-control" value={trip.flights} name="flights" onChange={handleChange}/>
                </div>
                <div className="second-half">
                    <p>Days (num)</p>
                    <input type="text" className="input form-control" value={trip.days} name="days" onChange={handleChange}/>
                    <p>Nights (num)</p>
                    <input type="text" className="input form-control" value={trip.nights} name="nights" onChange={handleChange}/>
                    <p>Activities</p>
                    <input type="text" className="input form-control" value={trip.activities} name="activities" onChange={handleChange}/>
                    <p>Reservations</p>
                    <input type="text" className="input form-control" value={trip.reservations} name="reservations" onChange={handleChange}/>
                </div>
                </div>
                <button className="btn btn-success" id="add-btn">Add</button>
                </form>
        </div>
    )
}

export default Input