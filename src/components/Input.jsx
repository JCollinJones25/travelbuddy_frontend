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

const URL = "http://localhost:4000/trips"

const handleSubmit = async (e) => {
    fetch(URL)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    // e.preventDefault()   
    //     try {
    //     const body = { location, hotel, flights, days, nights, activities, reservations }
    //     const response = await fetch(URL, {
    //         "method": "POST",
    //         "headers": { "Content-Type": "application/json" },
    //         "body": JSON.stringify(body)
    //     })
    //     console.log(response)
    // } catch (err) {
    //     console.error(err.message)
    // }
}

const handleChange = () => {

}

    return (
       
        <div className="text-center mt-5">
            <h3>Add a new upcoming trip</h3>
            <form className="m-5" onSubmit={handleSubmit}>
                <p>City, State</p>
                <input type="text" className="form-control" value={trip.location} onChange={handleChange}/>
                <p>Hotel(s)</p>
                <input type="text" className="form-control" value={trip.hotel} onChange={handleChange}/>
                <p>Flight(s)</p>
                <input type="text" className="form-control" value={trip.flights} onChange={handleChange}/>
                <p>Days</p>
                <input type="text" className="form-control" value={trip.days} onChange={handleChange}/>
                <p>Nights</p>
                <input type="text" className="form-control" value={trip.nights} onChange={handleChange}/>
                <p>Activities</p>
                <input type="text" className="form-control" value={trip.activities} onChange={handleChange}/>
                <p>Reservations</p>
                <input type="text" className="form-control" value={trip.reservations} onChange={handleChange}/>
                <button className="btn btn-sucess m-3">Add</button>
                </form>
        </div>
    )
}

export default Input