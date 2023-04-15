import "./footer.css";
import {
  Link,
  //  useNavigate
} from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer__info">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Mind <span>Global</span>
          </h3>

          <p className="footer-links">
            <a href="/#">Acasa</a>

            <a href="#desprenoi">Despre Noi</a>

            <a href="#servicii">Servicii</a>

            <Link to={"/price"}>Prețuri</Link>
            <Link to={"/shop"}>Coș</Link>

            <a href="#Cont">Cont</a>
          </p>

          <p className="footer-company-name">Mind Global © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>or.Chișinău</span> str.Miron Costin 26/2
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+373 68 347 830</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:mindcfem@gmail.com">mindcfem@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Digital Marketing Agency</span>
            Designed by ClickSchool students
          </p>
        </div>
      </footer>
    </div>
  );
};
