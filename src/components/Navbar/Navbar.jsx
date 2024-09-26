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
        <li><Link to="/spacelog/">Landing</Link></li>
        <li><Link to="/spacelog/starlink">Starlink</Link></li>
        <li><Link to="/spacelog/starship">Starship</Link></li>
        <li><Link to="/spacelog/iss">ISS</Link></li>
        <li><Link to="/spacelog/voyager">Voyager</Link></li>
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
        <li><Link to="/spacelog/" onClick={toggleMenu}>Landing</Link></li>
        <li><Link to="/spacelog/iss" onClick={toggleMenu}>ISS</Link></li>
        <li><Link to="/spacelog/voyager" onClick={toggleMenu}>Voyager</Link></li>
        <li><Link to="/spacelog/starship" onClick={toggleMenu}>Starship</Link></li>
        <li><Link to="/spacelog/starlink" onClick={toggleMenu}>Starlink</Link></li>
      </ul>
    </nav>
  );
}
