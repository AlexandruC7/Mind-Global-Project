import "./logare.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Logare() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    // Verificăm dacă datele de autentificare sunt corecte
    if (
      username === "user" &&
      email === "user@example.com" &&
      password === "parola123"
    ) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-logo-image">
        <h1>WELCOME</h1>
      </div>
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button">SIGN IN</button>
          <p className="message">
            Not registered? <Link to={"/newacc"}>Create an account</Link>
          </p>
        </form>
        {isAuthenticated && <p>Te-ai autentificat cu succes!</p>}
      </div>
    </div>
  );
}
