import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Sign.css";

export default function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();

        if (username && email && password) {
           
            alert("Account created successfully! Redirecting to Login...");

            navigate("/login");
        } else {
            alert("Please fill all fields.");
        }
    };

    const handleGuestLogin = () => {
        alert("Continuing as Guest...");
        navigate("/"); 
    };

    return (
        <div className="signup">
            <div className="card">
                <div className="left">
                    <h2>Social-X SignUp</h2>
                    <p>Please enter your credentials to SignUp.</p>
                    <span>Have an account?</span>
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                    <button className="btn btn-secondary" onClick={handleGuestLogin}>
                        Continue as Guest
                    </button>
                </div>

                <form className="right" onSubmit={handleSignUp}>
                    <input
                        type="text"
                        required
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
