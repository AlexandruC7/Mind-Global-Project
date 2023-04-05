import "./header.css";
import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
{
  /* <script
  src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
  type="text/javascript"
></script>; */
}

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
        <a href="/#">Acasa</a>
        <a href="/#">Despre</a>
        <a href="/#">Servicii</a>
        <a href="/#">Contacte</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          {/* <FaTimes /> */}
          icon
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {/* <FaBars /> */}
        icon
      </button>
    </header>
  );
};
