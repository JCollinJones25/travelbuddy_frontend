import { useState, useEffect } from "react";
import Edit from "./Edit";

const Trips = () => {
  const [trips, setTrips] = useState([]);

  const URL = "http://localhost:4000/trips";

  const getTrips = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setTrips(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const deleteTrip = async (id) => {
    try {
      const deleteTrip = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });
      setTrips(trips.filter((trip) => trip.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
            {trips.map((trip) => (
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
                    <Edit trip={trip} URL={URL} />
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

export default Trips;
