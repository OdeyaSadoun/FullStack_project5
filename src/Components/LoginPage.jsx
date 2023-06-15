import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Server from './Server';
import '../CSS/LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const users = await Server.getUsers();

    // Password needs to be the last 4 digits of the lat field
    const user = users.find((user) => user.username === username && user.address.geo.lat.slice(-4) === password);

    if (user) {
      // Save the authorized user to local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Navigate to the application page
      navigate('/app');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
