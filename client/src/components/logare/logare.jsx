import "./logare.scss";
import React from "react";

export function Logare() {
  return (
    <div className="login-page">
      <div className="login-page-logo-image">
        <h1>WELCOME</h1>
        <img src={"./mind_logo_simple.png"} alt="" />
      </div>
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="login-button">SIGN IN</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
