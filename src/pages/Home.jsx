import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Book Doctor Appointments Easily
      </h1>

      <p style={{ color: "gray", marginBottom: "20px" }}>
        Find best doctors and book appointments in seconds
      </p>

      <Link to="/doctors">
        <button style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          View Doctors
        </button>
      </Link>
    </div>
  );
}

export default Home;