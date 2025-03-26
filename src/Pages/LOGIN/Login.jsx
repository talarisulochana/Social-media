import '../LOGIN/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Attempt:', { username, password });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Social-X Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            consequuntur nemo incidunt.
          </p>
          <span>Don't Have An Account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>

        <form className="right" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
