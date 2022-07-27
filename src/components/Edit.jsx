import { useState } from "react"


const Edit = ({trip}) => {

    console.log(trip)

    const [location, setLocation] = useState(trip.location)
    const [hotel, setHotel] = useState(trip.hotel)
    const [flights, setFlights] = useState(trip.flights)
    const [days, setDays] = useState(trip.days)
    const [nights, setNights] = useState(trip.nights)
    const [activities, setActivities] = useState(trip.activities)
    const [reservations, setReservations] = useState(trip.reservations)


  return (
    <div className="edit">
      
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${trip.id}`}>Edit</button>

      <div class="modal" id={`id${trip.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
           
            <div class="modal-header">
              <h4 class="modal-title">Edit {location}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
                <input type="text" className="form-control" value={location}/>
                <input type="text" className="form-control" value={hotel}/>
                <input type="text" className="form-control" value={flights}/>
                <input type="text" className="form-control" value={days}/>
                <input type="text" className="form-control" value={nights}/>
                <input type="text" className="form-control" value={activities}/>
                <input type="text" className="form-control" value={reservations}/>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
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
