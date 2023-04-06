import "./header.css";
import React, { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Link,
  //  useNavigate
} from "react-router-dom";

export const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  //  const navigate = useNavigate();

  return (
    <header id="navbar">
      <h3>MindGlobal</h3>
      <img src={"./mind_logo_simple.png"} alt="" />

      <nav ref={navRef}>
        <a href="#">Acasa</a>
        <a href="#desprenoi">Despre Noi</a>
        <a href="#servicii">Servicii</a>
        <a href="#contacte">Contacte</a>

        {/* <a
          href="#"
          onClick={() => {
            navigate("/price");
          }}
        >
          Prețuri
        </a> */}

        <Link to={"/price"}>Prețuri</Link>

        <Link to={"/shop"}>Coș</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
};
