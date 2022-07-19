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
                <h1>Input</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}/>
                    <input type="text" className="form-control" value={hotel} onChange={e => setHotel(e.target.value)}/>
                    <input type="text" className="form-control" value={flights} onChange={e => setFlights(e.target.value)}/>
                    <input type="text" className="form-control" value={days} onChange={e => setDays(e.target.value)}/>
                    <input type="text" className="form-control" value={nights} onChange={e => setNights(e.target.value)}/>
                    <input type="text" className="form-control" value={activities} onChange={e => setActivities(e.target.value)}/>
                    <input type="text" className="form-control" value={reservations} onChange={e => setReservations(e.target.value)}/>
                    <button className="btn btn-sucess">Add</button>
                </form>
        </div>
        </Fragment>
    )
}

export default Input