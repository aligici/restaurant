import React, { useContext } from "react";
import ReservationContext from "../context/ReservationContext";

const ReservationList = () => {
  const { reservations } = useContext(ReservationContext);

  return (
    <>
      {reservations.length !== 0 ? (
        <div>
          <h2>Current Reservations</h2>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index}>
                {reservation.name} - {reservation.date} at {reservation.time},
                for {reservation.guests} guests.
                <br />
                {reservation.requests && (
                  <p> Special Requests: {reservation.requests}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ReservationList;
