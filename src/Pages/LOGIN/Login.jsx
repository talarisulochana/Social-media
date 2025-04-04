import React, { useState } from 'react';
import '../LOGIN/Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/');
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Social-X Login</h2>
          <p>Please enter your credentials to login.</p>
          <span>Don't have an account? Register here</span>
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
