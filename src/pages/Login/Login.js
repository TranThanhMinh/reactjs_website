import React, { useState } from "react";
import '../../styles/Login.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const data = { id: 123, message: "Hello from Home!" };
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   // navigate(`/home/${email}/${password}`); // Navigate with URL parameters
    navigate(`/main`); // Navigate with URL parameters
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;