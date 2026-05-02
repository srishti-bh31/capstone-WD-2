import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

import dr1 from "../assets/images/dr1.jpg";
import dr2 from "../assets/images/dr2.jpg";
import dr3 from "../assets/images/dr3.jpg";

function Doctors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const doctors = [
    { id: 1, name: "Dr. Sharma", specialization: "Cardiologist", rating: 4.5, img: dr1 },
    { id: 2, name: "Dr. Mehta", specialization: "Dermatologist", rating: 4.2, img: dr2 },
    { id: 3, name: "Dr. Khan", specialization: "Neurologist", rating: 4.7, img: dr3 },
  ];

  const filtered = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || doc.specialization === filter)
  );

  return (
    <div className="container">
      <h2>Doctors</h2>

      {/* 🔍 Search */}
      <input
        className="input"
        placeholder="Search doctor..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎯 Filter */}
      <select
        className="input"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Cardiologist</option>
        <option>Dermatologist</option>
        <option>Neurologist</option>
      </select>

      <div className="grid">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
