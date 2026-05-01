import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}

export default Signup;