import React from "react";
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
                <li className="link">Home</li>
                <li className="link">Case Records</li>
                <li className="link">File A Case</li>
                <a href="/trackCase">
                  <li className="link">Track A Case</li>
                </a>
            </ul>
            <div className="hamburger" onClick={showMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
    </nav>
  );
}
