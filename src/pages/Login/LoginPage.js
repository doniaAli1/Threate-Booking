import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const storedMovieData = JSON.parse(localStorage.getItem('movieData') || '[]');
    setMovieData(storedMovieData);
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      if (user.username === 'admin' && user.password === 'admin') {
        localStorage.setItem('loggedIn', 'true');
        navigate('/home-admin', { state: { isAdmin: true, movieData } });
      } else {
        navigate('/');
      }
    } else {
      alert('Invalid username or password. Please make sure you have an account.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
