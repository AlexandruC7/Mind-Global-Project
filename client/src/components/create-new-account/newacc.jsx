import "./newacc.scss";
import React from "react";

export function Newacc() {
  return (
    <div className="newacc-page">
      <div className="newacc-page-logo-image">
        <h1>WELCOME</h1>
        <img src={"./mind_logo_simple.png"} alt="" />
      </div>
      <div className="form">
        <form class="sigin-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOG IN</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
