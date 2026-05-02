import { useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function BookAppointment() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const slots = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

  const handleSubmit = () => {
    if (!localStorage.getItem("isLoggedIn")) {
      toast.error("Please login first");
      return;
    }

    const appointment = {
      doctorId: id,
      date,
      time,
      status: "Upcoming"
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    existing.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(existing));

    toast.success("Appointment Booked!");
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>

      <input
        className="input"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* ⏰ Time Slots */}
      <div>
        <p>Select Time:</p>
        {slots.map((slot) => (
          <button
            key={slot}
            className="btn"
            style={{
              margin: "5px",
              background: time === slot ? "#16a34a" : "#3b82f6"
            }}
            onClick={() => setTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button className="btn" onClick={handleSubmit}>
        Book
      </button>
    </div>
  );
}

export default BookAppointment;