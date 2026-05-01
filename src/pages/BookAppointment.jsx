import { useParams } from "react-router-dom";
import { useState } from "react";

function BookAppointment() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    const appointment = { doctorId: id, date, time };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    existing.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(existing));

    alert("Appointment Booked!");
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>

      <input
        className="input"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        className="input"
        type="time"
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn" onClick={handleSubmit}>
        Book
      </button>
    </div>
  );
}

export default BookAppointment;