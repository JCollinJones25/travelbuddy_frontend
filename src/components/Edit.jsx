import { useState } from "react"


const Edit = ({ trip, URL }) => {

    const [location, setLocation] = useState(trip.location)
    const [hotel, setHotel] = useState(trip.hotel)
    const [flights, setFlights] = useState(trip.flights)
    const [days, setDays] = useState(trip.days)
    const [nights, setNights] = useState(trip.nights)
    const [activities, setActivities] = useState(trip.activities)
    const [reservations, setReservations] = useState(trip.reservations)

    const updateTrip = async (e) => {
        e.preventDefault()
        try {
            const body = { location, hotel, flights, days, nights, activities, reservations }
             const response = await fetch(`${URL}/${trip.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

  return (
    <div className="edit">
      
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${trip.id}`}>Edit</button>

      <div className="modal" id={`${trip.id}`}
      onClick={() => {
        setLocation(trip.location)
        setHotel(trip.hotel)
        setFlights(trip.flights)
        setDays(trip.days)
        setNights(trip.nights)
        setActivities(trip.activities)
        setReservations(trip.reservations)
      }}>
        <div className="modal-dialog">
          <div className="modal-content">
           
            <div className="modal-header">
              <h4 className="modal-title">Edit Trip</h4>
              <button type="button" className="close" data-dismiss="modal"
              onClick={() => {
                setLocation(trip.location)
                setHotel(trip.hotel)
                setFlights(trip.flights)
                setDays(trip.days)
                setNights(trip.nights)
                setActivities(trip.activities)
                setReservations(trip.reservations)
              }}>
                &times;
              </button>
            </div>

            <div class="modal-body">
                <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}/>
                <input type="text" className="form-control" value={hotel} onChange={e => setHotel(e.target.value)}/>
                <input type="text" className="form-control" value={flights} onChange={e => setFlights(e.target.value)}/>
                <input type="text" className="form-control" value={days} onChange={e => setDays(e.target.value)}/>
                <input type="text" className="form-control" value={nights} onChange={e => setNights(e.target.value)}/>
                <input type="text" className="form-control" value={activities} onChange={e => setActivities(e.target.value)}/>
                <input type="text" className="form-control" value={reservations} onChange={e => setReservations(e.target.value)}/>
            </div>

            <div class="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={ updateTrip }>
                Edit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" 
              onClick={() => {
                setLocation(trip.location)
                setHotel(trip.hotel)
                setFlights(trip.flights)
                setDays(trip.days)
                setNights(trip.nights)
                setActivities(trip.activities)
                setReservations(trip.reservations)
              }}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
