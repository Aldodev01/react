import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="brand">
                Aldo
            </h3>
            <ul className="menu">
                <li className="menuItem">Home</li>
                <li className="menuItem">About</li>
                <li className="menuItem">Contact</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">showCase</li>
            </ul>
        </nav>
    )
}

export default Navbar
