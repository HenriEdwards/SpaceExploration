import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle between open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/starlink">Starlink</Link></li>
        <li><Link to="/starship">Starship</Link></li>
        <li><Link to="/iss">ISS</Link></li>
        <li><Link to="/voyager">Voyager</Link></li>
      </ul>

      {/* Mobile nav toggle */}
      <span 
        className="material-symbols-outlined menu-icon" 
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'close' : 'menu'}
      </span>

      {/* Mobile nav */}
      <ul className={`navbar-m-container ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Landing</Link></li>
        <li><Link to="/iss" onClick={toggleMenu}>ISS</Link></li>
        <li><Link to="/voyager" onClick={toggleMenu}>Voyager</Link></li>
        <li><Link to="/starship" onClick={toggleMenu}>Starship</Link></li>
        <li><Link to="/starlink" onClick={toggleMenu}>Starlink</Link></li>
      </ul>
    </nav>
  );
}
