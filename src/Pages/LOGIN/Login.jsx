import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:5185/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/LayOut"); 
      } else {
        setError(data.message || "Invalid credentials!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Social-X Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur nemo incidunt.
          </p>
          <span>Don't Have An Account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>

        <form className="right" onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}


