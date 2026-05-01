import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="card">
      
      {}
      <img
        src={doctor.img}
        alt="doctor"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3>{doctor.name}</h3>
      <p style={{ color: "#94a3b8" }}>{doctor.specialization}</p>

      <Link to={`/book/${doctor.id}`}>
        <button className="btn">Book</button>
      </Link>
    </div>
  );
}

export default DoctorCard;