import { Link } from 'react-router-dom'
import { SiGmail, SiInstagram, SiFacebook, SiGithub } from 'react-icons/si'
import './Navbar.css'  
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            {/* Desktop navigation - left side */}
            <ul className="nav-linksLeft">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>

            {/* Desktop name */}
            <h1 className='desktop-name'>Jeremiah Felix M. Manabat</h1>
            
            {/* Mobile name */}
            <h1 className='mobile-name'>Jeremiah's Portfolio</h1>

            {/* Desktop navigation - right side (icons) */}
            <ul className="nav-linksRight">
                <li><a href="mailto:xianmananat@gmailx.com"><SiGmail/></a></li>
                <li><a href="https://www.instagram.com/xianmanabat/" target="_blank" rel="noopener noreferrer"><SiInstagram/></a></li>
                <li><a href="https://github.com/XianManabat" target="_blank" rel="noopener noreferrer"><SiGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/jeremiah-felix-manabat-2181972a1/" target="_blank" rel="noopener noreferrer">Linked In</a></li>
            </ul>

            {/* Mobile sidebar */}
            <div className={`sidebars ${isOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
                    <li><a href="mailto:xianmananat@gmail.com">Gmail</a></li>
                    <li><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://github.com/XianManabat" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/jeremiah-felix-manabat-2181972a1/" target="_blank" rel="noopener noreferrer">Linked In</a></li>
                </ul>
            </div>

            {/* Burger button */}
            <div className="burger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    )
}

export default Navbar