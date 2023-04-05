import "./header.css";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  //function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="navbar">
      <h3>MindGlobal</h3>
      <nav ref={navRef}>
        <a href="#">Acasa</a>
        <a href="#desprenoi">Despre</a>
        <a href="#">Servicii</a>
        <a href="#">Contacte</a>
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
