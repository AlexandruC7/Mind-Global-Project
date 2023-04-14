import "./logare.scss";
import {
  Link,
  //  useNavigate
} from "react-router-dom";
import React from "react";

export function Logare() {
  return (
    <div className="login-page">
      <div className="login-page-logo-image">
        <h1>WELCOME</h1>
      </div>
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email address" />
          <input type="password" placeholder="password" />
          <button className="login-button">SIGN IN</button>
          <p className="message">
            Not registered? <Link to={"/newacc"}>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
