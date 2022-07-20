import { Fragment, useState } from "react"

const Input = (props) => {

const [location, setLocation] = useState("")
const [hotel, setHotel] = useState("")
const [flights, setFlights] = useState("")
const [days, setDays] = useState("")
const [nights, setNights] = useState("")
const [activities, setActivities] = useState("")
const [reservations, setReservations] = useState("")

const onSubmitForm = async e => {
    e.preventDefault()
    try {
        const body = { location, hotel, flights, days, nights, activities, reservations }
        const response = await fetch("http://localhost:4000/trips", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        console.log(response)
    } catch (err) {
        console.error(err.message)
    }
}

    return (
        <Fragment>
            <div className="text-center mt-5">
                <h3>Add a new upcoming trip</h3>
                <form className="m-5" onSubmit={onSubmitForm}>
                    <p>City, State</p>
                    <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}/>
                    <p>Hotel(s)</p>
                    <input type="text" className="form-control" value={hotel} onChange={e => setHotel(e.target.value)}/>
                    <p>Flight(s)</p>
                    <input type="text" className="form-control" value={flights} onChange={e => setFlights(e.target.value)}/>
                    <p>Days</p>
                    <input type="text" className="form-control" value={days} onChange={e => setDays(e.target.value)}/>
                    <p>Nights</p>
                    <input type="text" className="form-control" value={nights} onChange={e => setNights(e.target.value)}/>
                    <p>Activities</p>
                    <input type="text" className="form-control" value={activities} onChange={e => setActivities(e.target.value)}/>
                    <p>Reservations</p>
                    <input type="text" className="form-control" value={reservations} onChange={e => setReservations(e.target.value)}/>
                    <button className="btn btn-sucess m-3">Add</button>
                </form>
        </div>
        </Fragment>
    )
}

export default Input