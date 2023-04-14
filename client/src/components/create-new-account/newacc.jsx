import "./newacc.scss";
import {
  Link,
  //  useNavigate
} from "react-router-dom";
import React from "react";

export function Newacc() {
  return (
    <div className="newacc-page">
      <div className="newacc-page-logo-image">
        <h1>WELCOME</h1>
      </div>
      <div className="form">
        <form className="sigin-form">
          <input type="email" placeholder="email address" />
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOG IN</button>
          <p className="message">
            Already registered? <Link to={"/logare"}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
