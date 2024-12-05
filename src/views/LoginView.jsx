import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginView.css';

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Predefined credentials (replace with actual logic if needed)
  const predefinedUsername = "1212@gmail.com";
  const predefinedPassword = "ILoveYou";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === predefinedUsername && password === predefinedPassword) {
      alert("Login successful!");
      navigate('/movies'); // Redirect to HomeView
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div class="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;