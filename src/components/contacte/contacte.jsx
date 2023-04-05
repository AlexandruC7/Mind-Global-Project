import "./contacte.css";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/Mail";
export const Contacte = () => {
  return (
    <div class="contact">
      <div class="constact-section">
        <div class="contact-info">
          <div class="Location">
            <div class="iconita">
              <RoomIcon />
            </div>
            <div class="text">str.Miron Costin 26/2</div>
          </div>
          <div class="posta">
            <div class="mailincon">
              <MailIcon />
            </div>
            <div class="mialtext">mindcfem@gmail.com</div>
          </div>
          <div class="call">
            <div class="calliconita">
              <CallIcon />
            </div>
            <div class="calltext">+373 68 347 830</div>
          </div>
          <div class="accestime">
            <div class="accestimeiconit">
              <AccessTimeIcon />
            </div>
            <div class="accestimetext">Mon-Fri 8:00 Am to 5:00 PM</div>
          </div>
        </div>
        <div class="contact-US">
          <h1> Contact-US</h1>
          <div class="inputuri">
            <input
              type="text"
              name="name"
              class="text-box"
              placeholder="Your Name"
              required
            ></input>
            <input
              type="text"
              name="email"
              class="text-box"
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
            class="send-btn"
            value="Send"
          ></input>
        </div>
      </div>
    </div>
  );
};
