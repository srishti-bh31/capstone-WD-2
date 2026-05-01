import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

import dr1 from "../assets/images/dr1.jpg";
import dr2 from "../assets/images/dr2.jpg";
import dr3 from "../assets/images/dr3.jpg";

function Doctors() {
  const [search, setSearch] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Sharma", specialization: "Cardiologist", img: dr1 },
    { id: 2, name: "Dr. Mehta", specialization: "Dermatologist", img: dr2 },
    { id: 3, name: "Dr. Khan", specialization: "Neurologist", img: dr3 },
  ];

  const filtered = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Doctors</h2>

      <input
        className="input"
        placeholder="Search doctor..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;