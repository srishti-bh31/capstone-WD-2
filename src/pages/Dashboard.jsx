import { useState, useEffect } from "react";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  const handleCancel = (index) => {
    const updated = [...appointments];
    updated[index].status = "Cancelled";
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Your Appointments</h2>

      {appointments.map((appt, index) => (
        <div key={index} className="card">
          <p><b>Doctor ID:</b> {appt.doctorId}</p>
          <p><b>Date:</b> {appt.date}</p>
          <p><b>Time:</b> {appt.time}</p>

          {/* 📅 Status */}
          <p><b>Status:</b> {appt.status}</p>

          {appt.status === "Upcoming" && (
            <button className="btn" onClick={() => handleCancel(index)}>
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
