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
      <div className="navbar_logo-and-image">
        <h1>MindGlobal</h1>
        <img src={"./mind_logo_simple.png"} alt="" />
      </div>
      <nav ref={navRef}>
        <div className="alltitles">
          <div className="navbar_titles">
            <a href="/#">Acasa</a>
          </div>
          <div className="navbar_titles">
            <a href="/#desprenoi">Despre Noi</a>
          </div>
          <div className="navbar_titles">
            <a href="/#servicii">Servicii</a>
          </div>
          <div className="navbar_titles">
            <Link to={"/price"}>Prețuri</Link>
          </div>
          <div className="navbar_titles">
            <a href="/#contacte">Contacte</a>
          </div>
          <div className="navbar_titles">
            <Link to={"/shop"}>Coș</Link>
          </div>
          <div className="navbar_titles">
            <a href="#Cont">Cont</a>
          </div>
          <div className="navbar_titles1">
            <Link to={"/logare"}>LOG IN</Link>
          </div>
        </div>
        {/* <a
          href="#"
          onClick={() => {
            navigate("/price");
          }}
        >
          Prețuri
        </a> */}

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
