import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavbarStyle.css";

export default function Navbar() {
  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("navLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("navLinksShow");
  };
  return (
    <nav className='navbar'>
            <div className="logo">Law By Code</div>
            <ul className="navLinks">
                <Link to={"/"}>
                <li className="link">Home</li>
                </Link>
                <Link to={"/"}>
                <li className="link">Case Records</li>
                </Link>
                <Link to={"/"}>
                <li className="link">File A Case</li>
                </Link>
                <Link to="/trackCase">
                  <li className="link">Track A Case</li>
                </Link>
            </ul>
            <div className="hamburger" onClick={showMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
    </nav>
  );
}
