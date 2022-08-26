import { useState, useEffect } from "react";
import Edit from "./Edit";

const Trips = (props) => {
  const [trips, setTrips] = useState({
    data: [],
    isLoading: true
  });

  const getTrips = async () => {
    try {
      const response = await fetch(`${props.URL}/trips`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      setTrips({
        data: result, 
        isLoading: false
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const deleteTrip = async (id) => {
    try {
      const deleteTrip = await fetch(`${props.URL}/trips/${id}`, {
        method: "DELETE",
      });
      setTrips({
        data: trips.data.filter((trip) => trip.id !== id), 
        isLoading: false
      });
      console.log(trips)
    } catch (err) {
      console.error(err.message);
    }
  };

  const loaded = () => {
    return (
      <div className="trips">
        <h5>Upcoming Trips</h5>
        <hr></hr>{" "}
        <table className="table">
          <tr>
            <th>Where?</th>
            <th>Date(s)</th>
            <th>Hotel(s)</th>
            <th>Flight(s)</th>
            <th>Days</th>
            <th>Nights</th>
            <th>Plans</th>
            <th>Reservations</th>
          </tr>
          <tbody>
            {trips.data.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.location}</td>
                <td>{trip.date}</td>
                <td>{trip.hotel}</td>
                <td>{trip.flights}</td>
                <td>{trip.days}</td>
                <td>{trip.nights}</td>
                <td>{trip.activities}</td>
                <td>{trip.reservations}</td>
                <div className="edit-delete-buttons">
                  <td>
                    <Edit trip={trip} URL={props.URL}></Edit>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTrip(trip.id)}
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="trips">
        <h5>Upcoming Trips</h5>
        <hr></hr>{" "}
        <table className="table">
          <div className="loading">
            <div className="spinner"></div>
          </div>
        </table>
      </div>
    );
  };

  return trips.isLoading ? loading() : loaded();


};

export default Trips;
