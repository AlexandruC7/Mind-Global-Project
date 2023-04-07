import "./contacte.css";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export const Contacte = () => {
  return (
    <div className="contact" id="contacte">
      <div className="constact-section">
        <div className="contact-info">
          <div className="iconita">
            <RoomIcon />
            <span className="text"> str.Miron Costin 26/2</span>
          </div>

          <div className="iconita">
            <MailIcon />
            <span className="text">mindcfem@gmail.com</span>
          </div>

          <div className="iconita">
            <CallIcon />
            <span className="text">+373 68 347 830</span>
          </div>

          <div className="iconita">
            <AccessTimeIcon />
            <span className="text">Mon-Fri 8:00 Am to 5:00 PM</span>
          </div>
        </div>
      </div>
      <form
        className="contact-US"
        onSubmit={(event) => {
          event.preventDefault();

          console.log(event);
        }}
      >
        <h1> Contact-US</h1>
        <div className="inputuri">
          <input
            type="text"
            name="name"
            className="text-box"
            placeholder="Your Name"
            required
          ></input>
          <input
            type="text"
            name="email"
            className="text-box"
            placeholder="Your Email"
            required
          ></input>
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <input
          type="submit"
          name="submit"
          className="send-btn"
          value="Send"
        ></input>
      </form>
    </div>
  );
};
