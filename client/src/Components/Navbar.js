import React from 'react'
import '../CSS/NavbarStyle.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
            <div className="logo">Law By Code</div>
            <ul className="navLinks">
                <li className="link">Home</li>
                <li className="link">Case Records</li>
                <li className="link">File A Case</li>
                <li className="link">Track A Case</li>
            </ul>
    </nav>
  )
}
