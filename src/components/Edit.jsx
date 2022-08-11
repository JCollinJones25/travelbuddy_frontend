import { useState } from "react"


const Edit = ({ trip, URL }) => {

    const [location, setLocation] = useState(trip.location)
    const [date, setDate] = useState(trip.date)
    const [hotel, setHotel] = useState(trip.hotel)
    const [flights, setFlights] = useState(trip.flights)
    const [days, setDays] = useState(trip.days)
    const [nights, setNights] = useState(trip.nights)
    const [activities, setActivities] = useState(trip.activities)
    const [reservations, setReservations] = useState(trip.reservations)

    const updateTrip = async (e) => {
        e.preventDefault()
        try {
            const body = { location, date, hotel, flights, days, nights, activities, reservations }
             const response = await fetch(`${URL}/trips/${trip.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    const resetModal = (e) => {
      if(e.target != document.getElementsByClassName('close') || e.target != document.getElementsByClassName('btn-danger') || e.target == document.getElementsByClassName('modal-content')) {
        console.log('You clicked inside the modal');
      } else {
        console.log('You are leaving the modal');
        setLocation(trip.location)
        setDate(trip.date)
        setHotel(trip.hotel)
        setFlights(trip.flights)
        setDays(trip.days)
        setNights(trip.nights)
        setActivities(trip.activities)
        setReservations(trip.reservations)
      }
    } 

  return (
    <div className="edit">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${trip.id}`}>Edit</button>
      <div className="modal" id={`${trip.id}`}>
        <div className="modal-dialog">
          <div className="modal-content" onClick={ resetModal }>
            <div className="modal-header">
              <h4 className="modal-title">Edit Trip</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={ resetModal }>
                &times;
              </button>
            </div>
            <div className="modal-body">
                <p>City, State</p>
                <input type="text" className="input form-control" value={location} onChange={e => setLocation(e.target.value)}/>
                <p>Date(s)</p>
                <input type="text" className="input form-control" value={date} onChange={e => setDate(e.target.value)}/>
                <p>Hotel(s)</p>
                <input type="text" className="input form-control" value={hotel} onChange={e => setHotel(e.target.value)}/>
                <p>Flight(s)</p>
                <input type="text" className="input form-control" value={flights} onChange={e => setFlights(e.target.value)}/>
                <p>Days</p>
                <input type="text" className="input form-control" value={days} onChange={e => setDays(e.target.value)}/>
                <p>Nights</p>
                <input type="text" className="input form-control" value={nights} onChange={e => setNights(e.target.value)}/>
                <p>Activities</p>
                <input type="text" className="input form-control" value={activities} onChange={e => setActivities(e.target.value)}/>
                <p>Reservations</p>
                <input type="text" className="input form-control" value={reservations} onChange={e => setReservations(e.target.value)}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={ updateTrip }>
                Edit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ resetModal }>
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
