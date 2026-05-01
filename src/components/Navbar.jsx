import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>HealthCare</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;